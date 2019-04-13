// libs
import * as React from 'react'

// components
import { HelloCard, SkillsCard } from '../../molecules'

// styles
import { cn } from '../../helpers'
import styles from './AboutCards.module.css'

// types

// component
const AboutCards = ({ className, ...restProps }) => (
	<div className={cn(className, styles.card)} {...restProps}>
		<HelloCard/>
		<SkillsCard/>
	</div>
)

export default AboutCards
