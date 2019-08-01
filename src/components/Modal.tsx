import React, { FC, useEffect } from 'react';
import { styled } from '@noquarter/ui';
import { useEventListener } from '@noquarter/hooks';

import IconCancel from '../assets/images/icon-cancel.svg';
import Tile from './styled/Tile';
import Center from './styled/Center';

import useFadeIn from '../lib/hooks/useFadeIn';
import FlexGrid from './styled/FlexGrid';

type ModalProps = {
	open: boolean;
	onClose: () => void;
	title?: string;
};

const Modal: FC<ModalProps> = ({ title, open, children, onClose }) => {
	const [styles, unmounted, ref] = useFadeIn(open, 200);

	useEventListener('keydown', (e: any) => {
		if (e.key === 'Escape') onClose();
	});

	useEffect(() => {
		if (open) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
		return () => {
			document.body.style.overflowY = 'scroll';
		};
	}, [open]);

	if (unmounted) return null;

	return (
		<StyledModal ref={ref} tabIndex={-1} style={styles}>
			<StyledOverlay onClick={onClose} />
			<StyledTile style={styles}>
				<FlexGrid>
					{title && <StyledTitle>{title}</StyledTitle>}
					<img
						onClick={() => onClose()}
						src={IconCancel}
						alt="Close"
						height={25}
					/>
				</FlexGrid>
				{children}
			</StyledTile>
		</StyledModal>
	);
};

export default Modal;

const StyledModal = styled(Center)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	align-items: flex-start;
	overflow: scroll;
	background-color: rgba(0, 0, 0, 0.1);
	flex-direction: row;
`;

const StyledOverlay = styled.div`
	z-index: 100;
	height: 100%;
	width: 100%;
	position: absolute;
`;
const StyledTile = styled(Tile)`
	z-index: 101;
	height: max-content;
	max-width: max-content;
	margin: ${p => p.theme.paddingXL} ${p => p.theme.paddingM};
`;

const StyledTitle = styled.p`
	color: ${p => p.theme.colorPrimary};
	font-size: ${p => p.theme.textL};
	margin: ${p => p.theme.paddingS} 0;
`;
