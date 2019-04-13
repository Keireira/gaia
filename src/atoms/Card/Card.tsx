// libs
import * as React from 'react'

// styles
import { cn } from '../../helpers'
import styles from './Card.module.css'

// types

// component
const Card = (props) => {
	const { className, width, height, color, children, ...restProps } = props
	
	return (
		<div
			className={cn(className, styles.card)}
			style={{
				'--width': width,
				'--height': height,
				'--bg-color': `var(--${color})`,
			}}
			{...restProps}
		>
			{children}
		</div>
	)
}

export default React.memo(Card)
