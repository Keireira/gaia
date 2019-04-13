import * as React from 'react'

const Href = ({ to, ...restProps }) => (
	<a target="_blank" rel="noopener noreferrer" href={to} {...restProps}/>
)

export default Href
