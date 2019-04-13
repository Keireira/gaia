import * as React from 'react'

import { cn } from '../../helpers'
import styles from './styles.css'

const Tag = ({ className, label }) => (
	<h6 className={cn(className, styles.tag)}>{`#${label}`}</h6>
)

export default Tag
