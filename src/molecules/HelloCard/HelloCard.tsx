// libs
import * as React from 'react'

// components
import { H1, Card } from '../../atoms'

// styles
import { cn } from '../../helpers'
import styles from './HelloCard.module.css'

// types

// component
const HelloCard = ({ className, ...restProps }) => (
	<Card
		className={cn(className, styles.card)}
		width={6}
		height={6}
		color="yellow"
	>
		<H1>Hello</H1>
	</Card>
)

export default HelloCard
