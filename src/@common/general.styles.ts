import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	:root {
		--grid-unit: calc(100vw / 24);
		font-size: calc(0.0571428571 * var(--grid-unit)); /* 1680px */
	}

	body {
		background-color: var(--swan-white);
		font-size: 4rem;
	}
`
