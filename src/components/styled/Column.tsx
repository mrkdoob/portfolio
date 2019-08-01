import { styled } from '@noquarter/ui';
import { media } from '../../application/theme';

type Size = 'third' | 'half' | 'twothird' | 'full';

const Column = styled.div<{ size?: Size }>`
	display: flex;
	flex-direction: column;
	width: 100%;

	${p => media.greaterThan('sm')`
    width: ${
			p.size === 'third'
				? '32%'
				: p.size === 'half'
				? '49%'
				: p.size === 'twothird'
				? '64%'
				: '100%'
		};
  `}

	${p => media.greaterThan('md')`
    width: ${
			p.size === 'third'
				? '32%'
				: p.size === 'half'
				? '49%'
				: p.size === 'twothird'
				? '64%'
				: '100%'
		};
  `}
`;

export default Column;
