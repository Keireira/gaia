import * as React from 'react'

import { CommonStyles, ResetStyles, Colors } from './src/@common'

export const wrapRootElement = ({ element }) => (
	<>
		<ResetStyles/>
		<CommonStyles/>
		<Colors/>

		{element}
	</>
)
