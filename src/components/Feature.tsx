import React, { FC, memo, useState } from 'react';

import { styled } from '@noquarter/ui';
import Modal from './Modal';
import Icon from './Icon';
import Center from './styled/Center';
import GitHub from '../assets/images/GitHub.png';

interface Props {
	feature: {
		title: string;
		description: string;
		screenshot?: string;
		url: string;
	};
}

const Feature: FC<Props> = ({ feature }) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);

	return (
		<div style={{ paddingRight: '5px' }}>
			<StyledScreenshot
				onClick={() => setModalOpen(true)}
				src={feature.screenshot}
			/>
			<Modal
				title={feature.title}
				open={modalOpen}
				onClose={() => setModalOpen(false)}
			>
				<Center>
					<StyledCoverImage src={feature.screenshot} />
				</Center>
				<StyledText>{feature.description}</StyledText>
				<a href={feature.url} target="_blank">
					<Icon isGitHub={true} alt="Gist" />
				</a>
			</Modal>
		</div>
	);
};

export default memo(Feature);

const StyledCoverImage = styled.img`
	padding: 0;
	width: 70%;
	height: 50%;
	margin-top: ${p => p.theme.paddingL};
	box-shadow: ${p => p.theme.boxShadow};
	border-radius: ${p => p.theme.borderRadius};
	margin-bottom: ${p => p.theme.paddingM};
`;

const StyledLabel = styled.p`
	margin-bottom: 0;
	font-weight: bold;
	color: ${p => p.theme.colorText};
`;

const StyledText = styled.p`
	margin-bottom: 0;
	color: ${p => p.theme.colorText};
`;

const StyledScreenshot = styled.img`
	cursor: pointer;
	object-fit: cover;
	padding: 0;
	width: 120px;
	height: 120px;
	margin-right: ${p => p.theme.paddingM};
	box-shadow: ${p => p.theme.boxShadow};
	border-radius: ${p => p.theme.borderRadius};
`;
