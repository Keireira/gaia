import * as React from 'react'

import { cn } from '../../helpers'

import styles from './styles.css'

const Card = ({ className, width, height, color, children, ...restProps }) => {
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
