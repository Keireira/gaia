import * as React from 'react'

import { StyledCard, StyledHref, StyledIcon } from './LinkCard.styles'

const LinkCard = ({ name, href, ...restProps }) => (
	<StyledCard {...restProps}>
		<StyledHref to={href}>
			<StyledIcon name={name}/>
		</StyledHref>
	</StyledCard>
)

export default LinkCard
