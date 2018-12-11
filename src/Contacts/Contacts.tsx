import * as React from 'react'

import Contact from './Contact'
import { ContactProps } from './Contact/Contact.d'
import StyledContacts from './Contacts.styles'
import contacts from './links.json'

const Contacts = () => (
	<StyledContacts>
		{contacts.map((contact: ContactProps) => (
			<Contact key={contact.id} {...contact}/>
		))}
	</StyledContacts>
)

export default Contacts
