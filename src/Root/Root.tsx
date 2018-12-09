import * as React from 'react'

import RootStyles from './Root.styles'

import { H3 } from '@atoms'

// TODO: Add normal localization
const isRussian = window.navigator.language.toLowerCase().includes('ru')

const headerText = (isRussian) ? 'Привет' : 'Hello'
const titleText = (isRussian)
	? 'Меня зовут Алёна и я делаю фронтенд'
	: 'My name is Alena and I am front-end engineer at Rocketbank'

const Root = () => (
	<RootStyles>
		<H3>{headerText}</H3>
		<H3>{titleText}</H3>
	</RootStyles>
)

export default Root
