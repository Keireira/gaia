import * as React from 'react'
import Link from 'gatsby-link'

import { MainWrapper, Wrapper, MemeCardsWrapper, Memes } from './Main.styles'

import { Card } from '../../atoms'
import { TagsRow } from '../../molecules'
import { AboutCards, LinkCards } from '../../organisms'

const tags = [
	{ label: 'js_dev', about: '' },
	{ label: 'react', about: '' },
	{ label: 'frontend', about: '' },
	{ label: 'css', about: '' },
	{ label: 'styled', about: '' },
	{ label: 'mordor', about: '' },
	{ label: 'kittens', about: '' },
]

const Main = () => {
	return (
		<MainWrapper>
			<TagsRow tagsList={tags}/>

			<Wrapper>
				<MemeCardsWrapper>
					<AboutCards/>

					<Memes>
						Memes
					</Memes>
				</MemeCardsWrapper>

				<LinkCards/>
			</Wrapper>
		</MainWrapper>
	)
}

export default Main
