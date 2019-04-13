import * as React from 'react'

import { LinkCard } from '../../molecules'
import LinksWrap from './LinkCards.styles'

const LinkCards = () => (
	<LinksWrap>
		<LinkCard name="github" href="https://github.com/Keireira"/>
		<LinkCard name="telegram" href="tg://resolve?domain=Keireira"/>
		<LinkCard name="email" href="mailto:feed@alena.red"/>
		<LinkCard name="twitter" href="https://twitter.com/keireira"/>
	</LinksWrap>
)

export default LinkCards
