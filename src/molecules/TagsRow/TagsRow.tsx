import * as React from 'react'

import { Tag } from '../../atoms'

import Root from './TagsRow.styles'

const TagsRow = ({ tagsList }) => (
	<Root>
		{tagsList.map(({ label }) => (
			<Tag key={label} label={label}/>
		))}
	</Root>
)

export default TagsRow
