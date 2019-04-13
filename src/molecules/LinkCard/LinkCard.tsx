// libs
import * as React from 'react'

// components
import { Card, Href, Icon } from '../../atoms'

// styles
import { cn } from '../../helpers'
import styles from './LinkCard.module.css'

// types

// component
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
