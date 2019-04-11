import styled from 'styled-components'

import Card from '../../atoms/Card/Card.styles'

export default styled(Card).attrs({
	width: 6,
	height: 6,
	color: 'yellow',
})`
	display: flex;
	align-items: flex-end;
	justify-content: center;

	padding: 11rem 14rem;
`
