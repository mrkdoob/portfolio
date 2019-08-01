import React, { FC, useContext } from 'react';
import { styled } from '@noquarter/ui';
import { AppContext } from '../application/context';

// To do: make seperate IconGitHub component for theme switching?
import GitHub from '../assets/images/GitHub.png';
import GitHubLight from '../assets/images/GitHub-Light.png';

interface Props {
	src?: string;
	alt: string;
	onClick?: () => {};
	isGitHub?: boolean;
}
const Icon: FC<Props> = ({ src, alt, onClick, isGitHub }) => {
	const context = useContext(AppContext);
	const gitHubIcon = context.theme === 'dark' ? GitHubLight : GitHub;

	return (
		<StyledIcon onClick={onClick} src={isGitHub ? gitHubIcon : src} alt={alt} />
	);
};
export default Icon;

const StyledIcon = styled.img`
	cursor: pointer;
	height: 35px;
	margin: ${p => p.theme.paddingM};

	&:hover {
		height: 36px;
		margin-bottom: 9px;
	}
`;
