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
		color: var(--snow);
		font-size: 4rem;
	}

	div#root {
		height: 100vh;
		min-height: 100%;

		width: 100vw;
		min-width: 100%;
	}
`
