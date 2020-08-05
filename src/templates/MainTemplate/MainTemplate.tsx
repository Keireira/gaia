import React from 'react'

import styles from './MainTemplate.css'

const MainTemplate = ({ children }) => (
	<div className={styles.wrapper}>
		{children}
	</div>
)

export default MainTemplate
