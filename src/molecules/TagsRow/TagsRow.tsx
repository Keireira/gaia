import * as React from 'react'

import { cn } from '../../helpers'
import { Tag } from '../../atoms'

import styles from './styles.css'

const TagsRow = ({ className, tagsList }) => (
	<header className={cn(className, styles.tags)}>
		{tagsList.map(({ label }) => (
			<Tag key={label} label={label}/>
		))}
	</header>
)

export default TagsRow
