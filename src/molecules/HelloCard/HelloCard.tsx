import * as React from 'react'

import { cn } from '../../helpers'
import { H1, Card } from '../../atoms'

import styles from './styles.css'

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
