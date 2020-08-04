import React from 'react'
import { Link } from 'gatsby'
import { useMatch, useLocation } from '@reach/router'

import styles from './Header.css'

const Header = () => {
	const location = useLocation()
	const { '*': test, type } = useMatch(`/:type/*`) || {}
	const ttt = location.pathname.substring(1).split('/')

	return (
		<header className={styles.header}>
			<Link to="/">root</Link>
			{ttt.map((matchPart) => {
				const createdPath = ''
				const q = location.pathname.substring(location.pathname.indexOf(matchPart) + matchPart.length)

				console.log(q)

				return (
					<React.Fragment key={matchPart}>
						<span>/</span>
						<Link to={createdPath}>{matchPart}</Link>
					</React.Fragment>
				)
			})}
		</header>
	)
}

export default Header
