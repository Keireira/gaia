// libs
import * as React from 'react'
import Link from 'gatsby-link'

// components
import { Card } from '../../atoms'
import { TagsRow } from '../../molecules'
import { AboutCards, LinkCards } from '../../organisms'

// styles
import styles from './Main.module.css'

// types

// data
const tags = [
	{ label: 'js_dev', about: '' },
	{ label: 'react', about: '' },
	{ label: 'frontend', about: '' },
	{ label: 'css', about: '' },
	{ label: 'styled', about: '' },
	{ label: 'mordor', about: '' },
	{ label: 'kittens', about: '' },
]

// component
const Main = () => {
	return (
		<div className={styles.mainWrapper}>
			<TagsRow tagsList={tags}/>

			<main className={styles.wrapper}>
				<div className={styles.memeCardsWrapper}>
					<AboutCards/>

					<div className={styles.memes}>
						Memes
					</div>
				</div>

				<LinkCards/>
			</main>
		</div>
	)
}

export default Main
