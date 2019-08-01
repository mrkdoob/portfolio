import { styled } from '@noquarter/ui';

const FlexDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: ${p => p.theme.paddingM};
	margin-bottom: ${p => p.theme.paddingXS};
`;

export default FlexDiv;
