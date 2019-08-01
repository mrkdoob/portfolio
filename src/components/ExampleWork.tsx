import React, { memo } from 'react';
import { workExamples } from '../lib/testData';
import Example from './Example';

import { styled } from '@noquarter/ui';

function ExampleWork() {
	return (
		<div>
			<Header>Some projects I'm working on</Header>
			{workExamples.length > 0 &&
				workExamples.map((item, index) => (
					<Example key={index} workExample={item} />
				))}
		</div>
	);
}

export default memo(ExampleWork);

const Header = styled.div`
	font-size: ${p => p.theme.textL};
	color: ${props => props.theme.colorPrimary};
	margin: ${p => p.theme.paddingL} 0;
`;
