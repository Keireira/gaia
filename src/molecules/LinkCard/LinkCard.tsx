import * as React from 'react'

import { cn } from '../../helpers'
import { Card, Href, Icon } from '../../atoms'

import styles from './styles.css'

const LinkCard = ({ className, name, href, ...restProps }) => (
	<Card
		className={cn(className, styles.card)}
		width={3}
		height={3}
		color="red"
		{...restProps}
	>
		<Href className={styles.link} to={href}>
			<Icon className={styles.icon} name={name}/>
		</Href>
	</Card>
)

export default LinkCard
