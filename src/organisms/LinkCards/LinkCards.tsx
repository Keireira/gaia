// libs
import * as React from 'react'

// components
import { LinkCard } from '../../molecules'

// styles
import { cn } from '../../helpers'
import styles from './LinkCards.module.css'

// types

// component
const LinkCards = ({ className, ...restProps }) => (
	<ul className={cn(className, styles.linksWrapper)} {...restProps}>
		<LinkCard
			className={styles.link}
			name="github"
			href="https://github.com/Keireira"
		/>

		<LinkCard
			className={styles.link}
			name="telegram"
			href="tg://resolve?domain=Keireira"
		/>

		<LinkCard
			className={styles.link}
			name="email"
			href="mailto:feed@alena.red"
		/>

		<LinkCard
			className={styles.link}
			name="twitter"
			href="https://twitter.com/keireira"
		/>
	</ul>
)

export default LinkCards
