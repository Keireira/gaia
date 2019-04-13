// libs
import * as React from 'react'

// components
import { Tag } from '../../atoms'

// styles
import { cn } from '../../helpers'
import styles from './TagsRow.module.css'

// types

// component
const TagsRow = ({ className, tagsList }) => (
	<header className={cn(className, styles.tags)}>
		{tagsList.map(({ label }) => (
			<Tag key={label} label={label}/>
		))}
	</header>
)

export default TagsRow
