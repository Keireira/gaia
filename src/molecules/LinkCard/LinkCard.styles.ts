import styled from 'styled-components'

import { Href, Icon } from '../../atoms'
import Card from '../../atoms/Card/Card.styles'

export const StyledIcon = styled(Icon)`
	width: 24rem;

	transition: all 0.15s ease-in;
`

export const StyledHref = styled(Href)`
	display: inline-flex;
  align-items: center;
  justify-content: center;

	width: 100%;
	height: 100%;
`

export const StyledCard = styled(Card).attrs({
	width: 3,
	height: 3,
	color: 'red',
})`
	&:hover {
		& ${StyledIcon} {
			transform: scale(1.1);
		}
	}

	&:active {
		& ${StyledIcon} {
			transform: scale(0.95);
		}
	}
`
