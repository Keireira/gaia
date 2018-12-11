import * as React from 'react'

import ContactRoot from './Contact.styles'

import { ContactProps } from './Contact.d'

const Contact = ({ logo, title, link, isExternal }: ContactProps) => {
	const hrefParams = (isExternal) ? {
		rel: 'noreferrer noopener',
		target: '_blank',
	} : {}

	return (
		<ContactRoot {...hrefParams} href={link}>
			{title}
		</ContactRoot>
	)
}

export default Contact
