import useTransition from "./useTransition"
import { RefObject } from "react"

export default function useFadeIn(open: boolean, duration?: number) {
  const timeout = duration || 300
  const [state, unmounted, ref] = useTransition<RefObject<HTMLDivElement>>({
    in: open,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout,
  })

  return [
    { ...modalStyles[state], transition: `all ${timeout}ms` },
    unmounted,
    ref,
  ]
}

const modalStyles: {
  [key: string]: { opacity: number }
} = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}
