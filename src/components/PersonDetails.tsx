import React, { FC, memo } from 'react';
import Tile from './styled/Tile';
import FlexDiv from './styled/FlexDiv';
import Icon from './Icon';
import { Person } from '../lib/testData';

import { styled } from '@noquarter/ui';

interface Props {
	person: Person;
}

const PersonDetails: FC<Props> = ({ person }) => {
	return (
		<StyledContainer>
			<StyledTile>
				<StyledAvatar src={person.avatarUrl} alt="Avatar image" />
				<Header>{person.name}</Header>
				<p>{person.interests}</p>
				<StyledSubHeader>Soft skills</StyledSubHeader>
				<StyledSubContent>{person.softskills}</StyledSubContent>
			</StyledTile>
			<StyledTile>
				<Header>Skills</Header>
				<FlexDiv>
					{person.skills.map((skill, index) => (
						<StyledSkill key={index}>{skill}</StyledSkill>
					))}
				</FlexDiv>
				<a href="https://github.com/mrkdoob" target="_blank">
					<Icon isGitHub={true} alt="GitHub" />
				</a>
			</StyledTile>
		</StyledContainer>
	);
};

export default memo(PersonDetails);

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	color: ${p => p.theme.colorText};
`;

const StyledAvatar = styled.img`
	object-fit: cover;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	margin-bottom: ${p => p.theme.paddingM};
`;

const StyledTile = styled(Tile)`
	text-align: center;
`;

const Header = styled.div`
	font-size: ${p => p.theme.textL};
	color: ${props => props.theme.colorPrimary};
`;

const StyledSubHeader = styled.h4`
	margin-top: ${p => p.theme.paddingL};
	margin-bottom: 0;
	color: ${props => props.theme.colorPrimary};
`;

const StyledSubContent = styled.p`
	margin-top: 0;
	margin-bottom: ${p => p.theme.paddingXS};
`;

const StyledSkill = styled.div`
	border: 1px solid lightgrey;
	margin: ${p => p.theme.paddingS};
	border-radius: ${p => p.theme.borderRadius};
	padding: ${p => p.theme.paddingS};
	font-size: ${p => p.theme.textS};
`;
