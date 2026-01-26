import type { Preview, Decorator } from '@storybook/react-vite';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import '../src/index.css';

// ======================================================
// THEME DECORATOR
// ======================================================

const withTheme: Decorator = (Story, context) => {
	const theme = context.globals.theme ?? 'light';
	document.documentElement.setAttribute('data-theme', theme);
	return Story();
};

// ======================================================
// PREVIEW CONFIG
// ======================================================

const preview: Preview = {
	decorators: [withTheme],

	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for FEUx components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', title: 'Light' },
					{ value: 'dark', title: 'Dark' },
				],
				showName: true,
			},
		},
	},

	parameters: {
		viewport: {
			options: INITIAL_VIEWPORTS,
		},
		backgrounds: {
			disable: true,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
