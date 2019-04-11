import styled from 'styled-components'

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
`

export const Wrapper = styled.main`
	display: flex;
	flex-direction: row;

	width: 100%;
`

export const MemeCardsWrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: calc(18 * var(--grid-unit));
`

export const Memes = styled.div`
	width: 100%;
	height: 100%;
`

export const Links = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;

	width: calc(6 * var(--grid-unit));

	& > *:nth-of-type(even) {
		align-self: flex-end;
	}
`
