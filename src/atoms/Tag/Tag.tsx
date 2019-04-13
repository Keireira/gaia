// libs
import * as React from 'react'

// styles
import { cn } from '../../helpers'
import styles from './Tag.module.css'

// types

// component
const Tag = ({ className, label }) => (
	<h6 className={cn(className, styles.tag)}>{`#${label}`}</h6>
)

export default Tag
