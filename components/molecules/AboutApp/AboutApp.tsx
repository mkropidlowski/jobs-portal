import Heading from 'components/atoms/Heading/Heading';
import Link from 'next/link';
import Navbar from '../NavBar/Navbar';
import styles from './aboutApp.module.scss';

export const AboutApp = () => (
	<>
		<Navbar />
		<div className={styles.about}>
			<Heading variant="h1">About Us</Heading>
			<p>
				Our job offer app provides a platform for job seekers and recruiters to connect. With our app, users can view job
				offers, add new job offers, and easily apply for jobs online.
			</p>
			<h2>Features</h2>
			<ul>
				<li>View job offers from a variety of industries and locations</li>
				<li>Create an account to add new job offers</li>
				<li>Search for job offers by keyword, location, and more</li>
				<li>Apply for jobs online with just a few clicks</li>
			</ul>
			<Heading variant="h1">Our Team</Heading>
			<p>
				Our team is made up of experienced developers and designers who are passionate about creating innovative solutions
				for the job market. We are committed to providing a seamless user experience and helping job seekers and recruiters
				find their perfect match.
			</p>
			<Heading variant="h1">Contact Us</Heading>
			<p>
				If you have any questions or feedback about our app, please dont hesitate to contact us using the form below. We
				will get back to you as soon as possible.
			</p>
			<Link href="/contact" legacyBehavior>
				<a className={styles.contactLink}>Contact Us</a>
			</Link>
		</div>
	</>
);

