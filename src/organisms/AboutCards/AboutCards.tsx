import * as React from 'react'

import Cards from './AboutCards.styles'
import { HelloCard, SkillsCard } from '../../molecules'

const AboutCards = () => (
	<Cards>
		<HelloCard/>
		<SkillsCard/>
	</Cards>
)

export default AboutCards
