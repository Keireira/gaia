// libs
import * as React from 'react'

// styles
import { cn } from '../../helpers'
import styles from './Tag.module.css'

// types

// component
const Tag = ({ className, label, ...restProps }) => (
	<h6 className={cn(className, styles.tag)} {...restProps}>{`#${label}`}</h6>
)

export default Tag
