import * as React from 'react'

import { cn } from '../../helpers'
import { H1, H3, Card } from '../../atoms'

import styles from './styles.css'

const SkillsCard = ({ className, ...restProps }) => (
	<Card
		className={cn(className, styles.card)}
		width={12}
		height={6}
		color="green"
		{...restProps}
	>
		<H1>Front-End</H1>
		<H3>engineering</H3>
	</Card>
)

export default SkillsCard
