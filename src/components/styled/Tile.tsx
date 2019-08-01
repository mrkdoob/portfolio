import { styled } from '@noquarter/ui';

const Tile = styled.div`
	width: 100%;
	background-color: ${p => p.theme.colorTile};
	box-shadow: ${p => p.theme.boxShadow};
	border-radius: ${p => p.theme.borderRadius};
	padding: ${p => p.theme.paddingL};
	margin-bottom: ${p => p.theme.paddingL};
`;

export default Tile;
