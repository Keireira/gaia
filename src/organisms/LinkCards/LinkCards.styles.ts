import styled from 'styled-components'

export default styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;

	width: calc(6 * var(--grid-unit));

	& > *:nth-of-type(even) {
		align-self: flex-end;
	}
`
