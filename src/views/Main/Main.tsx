import * as React from 'react'
import Link from 'gatsby-link'

import { MainWrapper, Wrapper, MemeCardsWrapper, Memes, Links } from './Main.styles'

import { Card } from '../../atoms'
import { TagsRow } from '../../molecules'
import { AboutCards } from '../../organisms'

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

				<Links>
					<Card width={3} height={3} color="red">Github</Card>
					<Card width={3} height={3} color="red">Telegram</Card>
					<Card width={3} height={3} color="red">E-Mail</Card>
					<Card width={3} height={3} color="red">Twitter</Card>
				</Links>
			</Wrapper>
		</MainWrapper>
	)
}

export default Main
