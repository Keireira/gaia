import * as React from 'react'

import { Header } from './Root.styles'

import { H3 } from '@atoms'
import Contacts from '../Contacts'

// TODO: Add normal localization
const isRussian = window.navigator.language.toLowerCase().includes('ru')

const headerText = (isRussian) ? 'Привет' : 'Hello'
const titleText = (isRussian)
	? 'Меня зовут Алёна и я делаю фронтенд'
	: 'My name is Alena and I am front-end engineer at Rocketbank'

const Root = () => (
	<>
		<Header>
			<H3>{headerText}</H3>
			<H3>{titleText}</H3>
		</Header>

		<Contacts/>
	</>
)

export default Root
