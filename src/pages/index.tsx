import * as React from 'react'
import Link from 'gatsby-link'

const Main = ({ data }) => {
	return (
		<div>
			<div>
				Hello!
			</div>

			<Link to="/page-2/">Go to page 2</Link>
		</div>
	)
}

export default Main
