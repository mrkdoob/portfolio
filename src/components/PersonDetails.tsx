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
				<Header>{person.name}</Header>
				<p>{person.birthdateText}</p>
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
			{/* <Tile>
				<Header>Details</Header>
				<p>{person.address}</p>
				<p>{person.phoneNumber}</p>
				<p>{person.email}</p>
			</Tile> */}
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

const StyledTile = styled(Tile)`
	text-align: center;
`;

const Header = styled.div`
	font-size: ${p => p.theme.textL};
	color: ${props => props.theme.colorPrimary};
`;

const StyledSubHeader = styled.p`
	margin-top: ${p => p.theme.paddingL};
	margin-bottom: 0;
	font-weight: bold;
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
