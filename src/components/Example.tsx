import React, { FC, memo, useState } from 'react';
import Tile from './styled/Tile';
import { WorkExample } from '../lib/testData';
import Browser from '../assets/images/browser.svg';

import { styled } from '@noquarter/ui';
import Modal from './Modal';
import Feature from './Feature';
import Center from './styled/Center';
import Icon from './Icon';
import FlexDiv from './styled/FlexDiv';

interface Props {
	workExample: WorkExample;
}

const Example: FC<Props> = ({ workExample }) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);

	return (
		<Tile>
			<Header>{workExample.title}</Header>
			<StyledCoverImage
				onClick={() => setModalOpen(true)}
				src={workExample.cover}
			/>
			<StyledText>{workExample.description}</StyledText>
			<a href={workExample.url} target="_blank">
				<Icon src={Browser} alt={workExample.title} />
			</a>
			{workExample.features && <StyledLabel>Examples</StyledLabel>}
			<div style={{ display: 'flex' }}>
				{workExample.features &&
					workExample.features.map((feature, index) => (
						<Feature key={index} feature={feature} />
					))}
			</div>
			<Modal
				title={workExample.title}
				open={modalOpen}
				onClose={() => setModalOpen(false)}
			>
				<Center>
					<StyledScreenshot src={workExample.cover} />
				</Center>
			</Modal>
		</Tile>
	);
};

export default memo(Example);

const Header = styled.div`
	font-size: ${p => p.theme.textL};
	color: ${props => props.theme.colorPrimary};
`;

const StyledCoverImage = styled.img`
	cursor: pointer;
	object-fit: cover;
	padding: 0;
	width: 100%;
	height: 240px;
	margin-top: ${p => p.theme.paddingL};
	box-shadow: ${p => p.theme.boxShadow};
	border-radius: ${p => p.theme.borderRadius};
`;

const StyledLabel = styled.p`
	font-weight: bold;
	margin-bottom: ${p => p.theme.paddingS};
	color: ${p => p.theme.colorText};
`;

const StyledText = styled.p`
	margin-bottom: 0;
	color: ${p => p.theme.colorText};
`;

const StyledScreenshot = styled.img`
	object-fit: cover;
	padding: 0;
	width: 80%;
	height: 80%;
	margin-top: ${p => p.theme.paddingL};
	border-radius: ${p => p.theme.borderRadius};
`;
