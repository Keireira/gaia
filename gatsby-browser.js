import * as React from 'react'

import { CommonStyles, ResetStyles, Colors } from './src/styles'

export const wrapRootElement = ({ element }) => (
	<>
		<ResetStyles/>
		<CommonStyles/>
		<Colors/>

		{element}
	</>
)
