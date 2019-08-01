import { ThemeInterface, defaultTheme } from '@noquarter/ui';
import { generateMedia } from 'styled-media-query';

export const media = generateMedia({
	xl: '1440px',
	lg: '1170px',
	md: '768px',
	sm: '450px',
});

export const theme: (isDark: boolean) => ThemeInterface = isDark => ({
	...defaultTheme,
	colorBackground: isDark ? '#373c3f' : '#f8f9fd',
	colorLabel: isDark ? '#81878a' : '#b1bbc4',
	colorShadow: isDark ? 'rgba(0, 0, 0, 0.1)' : 'rgba(200, 200, 200, 0.1)',
	colorText: isDark ? '#ebecec' : '#1b2d41',
	colorTile: isDark ? '#2f3135' : '#fff',
	colorPrimary: '#63CAEA',
});
