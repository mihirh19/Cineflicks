import React from 'react'
import styles from "./contact.module.css";
import {ContactCard} from "@/app/components/ContactCard";
import {ContactForm} from "@/app/components/ContactForm";

const contact = () => {
	return (
		<>
			<div className={styles.container}>
			<h1>contact Us</h1>
			<ContactCard/>
				<section className={styles.contact_section}>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					<h2>We'd love to hear <span> from you </span></h2>

					<ContactForm />
				</section>
			</div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.0643122936267!2d68.96483067480195!3d22.237638545164746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569c3ab7c4e9e5%3A0x31b7c3111df48f4!2sShree%20Dwarkadhish%20Temple!5e0!3m2!1sen!2sin!4v1685184861173!5m2!1sen!2sin"
				width={600} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
				referrerPolicy="no-referrer-when-downgrade"></iframe>


</>


	)
}

export default contact