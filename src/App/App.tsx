import * as React from 'react';

import { Colors, CommonStyles, Fonts, ResetStyles } from '@common'
import Root from '../Root';
import StyledRoot from './App.styles'

const App = () => (
	<>
		<ResetStyles/>
		<Colors/>
		<Fonts/>
		<CommonStyles/>

		<StyledRoot>
			<Root />
		</StyledRoot>
	</>
)

export default App;
