// libs
import * as React from 'react'

// components
import { H2 } from '../../atoms'

// styles
import { cn } from '../../helpers'
import styles from './Memes.module.css'

// types

// component
const Memes = ({ className, tag, ...restProps }) => (
	<div className={cn(className, styles.root)} {...restProps}>
		<H2 className={styles.text}>{tag && tag.about || '...'}</H2>
	</div>
)

export default Memes
