import * as React from 'react'

import TagRoot from './Tag.styles'

const Tag = ({ label }) => (
	<TagRoot>{`#${label}`}</TagRoot>
)

export default React.memo(Tag)
