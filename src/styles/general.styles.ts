import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	:root {
		--grid-unit: calc(100vw / 24);
	}

	html {
		font-size: calc(0.0571428571 * var(--grid-unit)); /* 1680px */
	}

	body {
		background-color: var(--gray);
		color: var(--gray);
		font-size: 4rem;
		font-family: -apple-system, system-ui, BlinkMacSystemFont,
			'Segoe UI', 'SF Pro Text', Roboto, 'Helvetica Neue',
			Arial, sans-serif;
	}

	div#___gatsby > div[role="group"] {
		height: 100vh;
		min-height: 100%;

		width: 100vw;
		min-width: 100%;
	}
`