import React from 'react'

import Header from 'components/Header'

import styles from './MainTemplate.css'



const MainTemplate = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header/>
			{children}
		</div>
	)
}

export default MainTemplate
