import * as React from 'react'

import { CommonStyles, ResetStyles, Colors } from './src/common'

export const wrapRootElement = ({ element }) => (
	<div id="root">
		<ResetStyles/>
		<CommonStyles/>
		<Colors/>

		{element}
	</div>
)
