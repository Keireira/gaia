// libs
import React, { useState } from 'react'
import Link from 'gatsby-link'

// components
import { Card } from '../../atoms'
import { TagsRow } from '../../molecules'
import { AboutCards, LinkCards, Memes } from '../../organisms'

// styles
import styles from './Main.module.css'

// types

// data
const tags = [
	{ label: 'js', about: 'Where is my this?' },
	{ label: 'react', about: 'Doing whatever Dan Abramov says to do' },
	{ label: 'frontend', about: `Do you want some To-Do List apps?` },
	{ label: 'css', about: `CSS\nIS\nAWE|SOME` },
	{ label: 'styled', about: '>>> S.T.Y.L.E.D <<<' },
	{ label: 'mordor', about: 'God Save the Tsar!' },
	{ label: 'kittens', about: '( ⓛ ﻌ ⓛ *)' },
]

// component
const Main = () => {
	const [activeTag, setActiveTag] = useState()

	return (
		<div className={styles.mainWrapper}>
			<TagsRow tagsList={tags} onChange={setActiveTag}/>

			<main className={styles.wrapper}>
				<div className={styles.memeCardsWrapper}>
					<AboutCards/>

					<Memes tag={activeTag}/>
				</div>

				<LinkCards/>
			</main>
		</div>
	)
}

export default Main
