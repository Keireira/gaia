import * as React from 'react'

import { LinkCard } from '../../molecules'

import { cn } from '../../helpers'
import styles from './styles.css'

const LinkCards = ({ className, ...restProps }) => (
	<div className={cn(className, styles.linksWrapper)} {...restProps}>
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

	</div>
)

export default LinkCards
