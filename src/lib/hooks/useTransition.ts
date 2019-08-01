import React, { useRef, useEffect, useMemo, useState, useCallback } from "react"

const config = {
  disabled: false,
}

interface TransitionGroupContextValue {
  isMounting: boolean
}

const UNMOUNTED = "unmounted"
const EXITED = "exited"
const ENTERING = "entering"
const ENTERED = "entered"
const EXITING = "exiting"

type TransitionStatus =
  | typeof UNMOUNTED
  | typeof EXITED
  | typeof ENTERING
  | typeof ENTERED
  | typeof EXITING

interface Timeouts {
  enter?: number
  exit?: number
  appear?: number
}

type DoneCallback = () => void

type NextCallback = DoneCallback & {
  cancel: () => void
}

interface TransitionProps {
  context?: TransitionGroupContextValue | null // doesn't work.
  in?: boolean
  mountOnEnter?: boolean
  unmountOnExit?: boolean
  appear?: boolean
  enter?: boolean
  exit?: boolean
  timeout?: Timeouts | number
}

const PROPS_KEYS: Array<keyof TransitionProps> = [
  "context",
  "in",
  "mountOnEnter",
  "unmountOnExit",
  "appear",
  "enter",
  "exit",
  "timeout",
]

interface TransitionState {
  status: TransitionStatus
}

const defaultProps = {
  context: null,
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
}

export default function useTransition<T>(
  transitionProps: TransitionProps,
): [TransitionStatus, boolean, any] {
  const props = useDefaultProps(transitionProps, defaultProps, PROPS_KEYS)
  const prevProps = usePrevious(props)

  const nodeRef = useRef<T>(null)

  const appearStatusRef = useRef<TransitionStatus | null>(null)

  const nextCallbackRef = useRef<NextCallback | null>(null)

  const [state, setState] = useDerivedStateFromProps<
    TransitionProps,
    TransitionState
  >(
    props,
    () => {
      let initialStatus: TransitionStatus
      appearStatusRef.current = null

      if (props.in) {
        initialStatus = EXITED
        appearStatusRef.current = ENTERING
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED
        } else {
          initialStatus = EXITED
        }
      }

      nextCallbackRef.current = null

      return { status: initialStatus }
    },
    (nextProps, prevState) => {
      if (nextProps.in && prevState.status === UNMOUNTED)
        return { status: EXITED }
      return null
    },
  )

  const getTimeouts = useCallback((): Required<Timeouts> => {
    const { timeout } = props
    let exit, enter, appear

    exit = enter = appear = timeout

    if (timeout != null && typeof timeout !== "number") {
      exit = timeout.exit
      enter = timeout.enter
      // TODO: remove fallback for next major
      appear = timeout.appear !== undefined ? timeout.appear : enter
    }
    return { exit, enter, appear } as Required<Timeouts> //eslint-disable-line
  }, [props])

  const cancelNextCallback = useCallback(() => {
    if (nextCallbackRef.current !== null) {
      nextCallbackRef.current.cancel()
      nextCallbackRef.current = null
    }
  }, [])

  const setNextCallback = useCallback(
    (callback: DoneCallback): NextCallback => {
      let active = true

      nextCallbackRef.current = (() => {
        if (active) {
          active = false
          nextCallbackRef.current = null

          callback()
        }
      }) as NextCallback

      nextCallbackRef.current.cancel = () => {
        active = false
      }

      return nextCallbackRef.current
    },
    [],
  )
  const safeSetState = useCallback(
    (nextState: Updater<TransitionState>, callback?: DoneCallback) => {
      callback = callback && setNextCallback(callback)
      setState(nextState, callback)
    },
    [setState, setNextCallback],
  )

  const onTransitionEnd = useCallback(
    (node: HTMLElement, timeout: number, handler: DoneCallback) => {
      setNextCallback(handler)

      if (timeout != null) {
        setTimeout(nextCallbackRef.current, timeout)
      }
    },
    [setNextCallback],
  )

  const performEnter = useCallback(
    (node: HTMLElement, mounting: boolean) => {
      const { enter, context } = props
      const appearing = context ? context.isMounting : mounting

      const timeouts = getTimeouts()
      const enterTimeout = appearing ? timeouts.appear : timeouts.enter

      if ((!mounting && !enter) || config.disabled) {
        safeSetState({ status: ENTERED })
        return
      }

      safeSetState({ status: ENTERING }, () => {
        onTransitionEnd(node, enterTimeout, () => {
          safeSetState({ status: ENTERED })
        })
      })
    },
    [safeSetState, onTransitionEnd, props, getTimeouts],
  )

  const performExit = useCallback(
    (node: HTMLElement) => {
      const { exit } = props
      const timeouts = getTimeouts()

      if (!exit || config.disabled) {
        safeSetState({ status: EXITED })
        return
      }

      safeSetState({ status: EXITING }, () => {
        onTransitionEnd(node, timeouts.exit, () => {
          safeSetState({ status: EXITED })
        })
      })
    },
    [safeSetState, onTransitionEnd, getTimeouts, props],
  )

  const updateStatus = useCallback(
    (mounting = false, nextStatus: TransitionStatus | null) => {
      if (nextStatus !== null) {
        cancelNextCallback()
        // @ts-ignore
        const node = nodeRef.current! //eslint-disable-line

        if (nextStatus === ENTERING) {
          performEnter(node as any, mounting)
        } else {
          performExit(node as any)
        }
      } else if (props.unmountOnExit && state.status === EXITED) {
        setState({ status: UNMOUNTED })
      }
    },
    [
      cancelNextCallback,
      performEnter,
      performExit,
      setState,
      props.unmountOnExit,
      state,
    ],
  )

  useEffect(() => {
    updateStatus(true, appearStatusRef.current)
  }, [updateStatus])

  useEffect(() => {
    let nextStatus: TransitionStatus | null = null
    if (prevProps !== props) {
      const { status } = state

      if (props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING
        }
      }
    }
    updateStatus(false, nextStatus)
  }, [prevProps, props, updateStatus, state])

  const unmounted = state.status === UNMOUNTED
  return [state.status, unmounted, nodeRef]
}

function useDerivedStateFromProps<P, S>(
  props: P,
  initialState: S | (() => S),
  getDerivedStateFromProps: React.GetDerivedStateFromProps<P, S>,
): [S, Setter<S>] {
  const [state, setState] = useStateSetter<S>(initialState)
  const nextState = getDerivedStateFromProps(props, state)

  if (nextState !== null) setState(nextState)

  return [state, setState]
}

type Defaultize<P, D> = Pick<P, Exclude<keyof P, keyof D>> &
  Required<Pick<P, Extract<keyof P, keyof D>>>

function useDefaultProps<P, D>(
  props: P,
  defaultProps: D,
  keys: Array<keyof P> = Object.keys(props) as any,
): Defaultize<P, D> {
  return useMemo(
    () => ({ ...defaultProps, ...props }),
    keys.map(k => props[k]), // eslint-disable-line
  ) as any
}

function usePrevious<T>(value: T): T | null {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

type UpdateState<S> = Partial<S> | S | null

type UpdateStateFunction<S> = (prevState: Readonly<S>) => UpdateState<S>

type Updater<S> = UpdateStateFunction<S> | UpdateState<S>

type Setter<S> = (updater: Updater<S>, callback?: () => void) => void

function useStateSetter<S>(initialState: S | (() => S)): [S, Setter<S>] {
  const [state, setState] = useState<S>(initialState)

  const setter = useCallback<Setter<S>>(
    (updater, callback) => {
      if (updater === null) return
      setState(prevState => {
        const nextState =
          typeof updater === "function"
            ? (updater as UpdateStateFunction<S>)(prevState)
            : updater
        if (nextState == null) return prevState
        if (callback) setTimeout(callback, 0)
        return { ...prevState, ...nextState }
      })
    },
    [setState],
  )

  return [state, setter]
}
