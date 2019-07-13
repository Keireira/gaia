// libs
import * as React from 'react'

// components
import { Tag } from '../../atoms'

// styles
import { cn } from '../../helpers'
import styles from './TagsRow.module.css'

// types

// component
const TagsRow = ({ className, tagsList, onChange }) => (
	<header className={cn(className, styles.tags)}>
		{tagsList.map((tag) => (
			<Tag key={tag.label} label={tag.label} onClick={() => onChange(tag)}/>
		))}
	</header>
)

export default TagsRow
