import React, { memo } from 'react';
import Column from '../components/styled/Column';
import FlexGrid from '../components/styled/FlexGrid';
import { person } from '../lib/testData';

import { styled } from '@noquarter/ui';
import ThemeSwitcher from './../components/ThemeSwitcher';
import ThemeProvider from '../components/providers/ThemeProvider';
import PersonDetails from '../components/PersonDetails';
import ExampleWork from '../components/ExampleWork';

function Application() {
	return (
		<ThemeProvider>
			<Wrapper>
				<FlexGrid>
					<Column size="third">
						<PersonDetails person={person} />
					</Column>
					<Column size="twothird">
						<ExampleWork />
					</Column>
				</FlexGrid>
				<ThemeSwitcher />
			</Wrapper>
		</ThemeProvider>
	);
}

export default memo(Application);

const Wrapper = styled.div`
	width: 100%;
	min-height: 100%;
	${p => p.theme.flexCenter};
	padding: 0 ${props => props.theme.paddingL};
	padding-bottom: ${props => props.theme.paddingL};
	background-color: ${props => props.theme.colorBackground};
`;
