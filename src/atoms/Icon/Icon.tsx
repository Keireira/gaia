// libs
import * as React from 'react'

// styles
import { cn } from '../../helpers'
import styles from './Icon.module.css'

// types
import { IconProps } from './Icon.d'

// component
const Icon = ({ className, name, ...restProps }: IconProps) => {
	const { id } = require(`./assets/${name}.svg`).default

	return (
		<svg className={cn(className, styles.icon)}>
			<use xlinkHref={`#${id}`} />
		</svg>
	)
}

export default Icon
