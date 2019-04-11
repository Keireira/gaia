import React from 'react'

import CardRoot from './Card.styles'

const Card = ({ width, height, color, children, size }) => {
	return (
		<CardRoot width={width} height={height} color={color}>
			{children}
		</CardRoot>
	)
}

export default React.memo(Card)
