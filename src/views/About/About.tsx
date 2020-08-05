import React from 'react'
import { Link } from 'gatsby'

import MainTemplate from 'templates/MainTemplate'
import TagCard from 'components/TagCard'

import styles from './About.module.css'

const getYears = () => {
	const start = new Date('2016-08-01')
	const now = new Date()

	const delta = now.getTime() - start.getTime()

	return Math.round(delta / (1000 * 3600 * 24))
}

const About = () => (
	<MainTemplate>
		<TagCard className={styles.about} tag="about">
			Hello. My name is Alena and I have been creating a web-frontend for {getYears()} days.<br/>
			I'm out of a job search now.
		</TagCard>

		<TagCard className={styles.photos} tag="photos">
			You can find some of my photos&nbsp;
			<a className={styles.link} href="https://www.instagram.com/kei_reira/" target="_blank" rel="noopener noreferrer">
				here
			</a>
		</TagCard>

		<TagCard className={styles.links} tag="links">
			<a className={styles.link} href="tg://resolve?domain=keireira">
				telegram
			</a><br/>

			<a className={styles.link} href="mailto:feed@alena.red?subject=Mail from site">
				e-mail
			</a><br/>

			<a className={styles.link} href="https://github.com/keireira" target="_blank" rel="noopener noreferrer">
				github
			</a><br/>

			<a className={styles.link} href="https://www.instagram.com/kei_reira/" target="_blank" rel="noopener noreferrer">
				instagram
			</a>
		</TagCard>
	</MainTemplate>
)

export default About
