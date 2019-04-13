// libs
import * as React from 'react'

// styles
import { cn } from '../../helpers'
import styles from './Typography.module.css'

// types

// components
export const H1 = ({ className, ...restProps }) => (
	<h1 className={cn(className, styles.h1)} {...restProps}/>
)

export const H2 = ({ className, ...restProps }) => (
	<h3 className={cn(className, styles.h2)} {...restProps}/>
)

export const H3 = ({ className, ...restProps }) => (
	<h3 className={cn(className, styles.h3)} {...restProps}/>
)
