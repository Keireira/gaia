import React from 'react'
import classnames from 'classnames'

import { Props } from './TagCard.d'

import styles from './TagCard.module.css'

const TagCard = ({ children, className, tag }: Props) => (
	<div className={styles.tagCard}>
		<a href={`#${tag}`} className={styles.tag}>
			#{tag}
		</a>

		<div className={classnames(className, styles.divider)}>
			{children}
		</div>
	</div>
)

export default TagCard
