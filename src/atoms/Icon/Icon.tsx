import * as React from 'react'

import { cn } from '../../helpers'

import { IconProps } from './Icon.d'
import styles from './styles.css'

const Icon = ({ className, name, ...restProps }: IconProps) => {
	const { id } = require(`./assets/${name}.svg`).default

	return (
		<svg className={cn(className, styles.icon)}>
			<use xlinkHref={`#${id}`} />
		</svg>
	)
}

export default Icon
