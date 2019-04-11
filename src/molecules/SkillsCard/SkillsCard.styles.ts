import styled from 'styled-components'

import Card from '../../atoms/Card/Card.styles'

export default styled(Card).attrs({
	width: 12,
	height: 6,
	color: 'green',
})`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 11rem 14rem 29rem 14rem;
`
