import * as React from 'react'

import { HelloCard, SkillsCard } from '../../molecules'

import { cn } from '../../helpers'
import styles from './styles.css'

const AboutCards = ({ className, ...restProps }) => (
	<div className={cn(className, styles.card)} {...restProps}>
		<HelloCard/>
		<SkillsCard/>
	</div>
)

export default AboutCards
