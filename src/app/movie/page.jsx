import {MovieCard} from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"
const movie = async () => {
	const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': process.env.RAPID_API_KEY,
			'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
		}
	}
	const res = await fetch(url, options)
	const data = await res.json()
	const main_data = data.titles;


	return (
		<>
			<section className={styles.movieSection}>
				<div className={styles.container}>
			<h1>Series & Movie</h1>
					<div className={styles.card_section}>
			{
				main_data.map((curElem) => {
					return <MovieCard key={curElem.jawSummary.id} {...curElem}/>
				})
			}
					</div>
				</div>
			</section>
		</>

	)
}

import React from 'react'

export default movie