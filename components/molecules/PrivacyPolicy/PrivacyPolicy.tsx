import Link from 'next/link';
import styles from './privacyPolicy.module.scss';

const PrivacyPolicy = () => (
	<div className={styles.privacyPolicy}>
		<h1>Privacy Policy</h1>
		<p>
			Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect
			from you across our website, https://example.com, and other sites we own and operate.
		</p>
		<h2>Information we collect</h2>
		<p>
			We only collect information about you if we have a reason to do so—for example, to provide our services, to
			communicate with you, or to make our services better. We collect this information from three sources: if and when you
			provide information to us, automatically through operating our services, and from outside sources. Let’s go over the
			information that we collect.
		</p>
		<ul>
			<li>
				<strong>Information You Provide to Us:</strong> We collect information that you provide to us. The amount and type
				of information depends on the context and how we use the information. Here are some examples:
				<ul>
					<li>
						<em>Basic Account Information:</em> We ask for basic information from you in order to set up your account. For
						example, we require individuals who sign up for a www.example.com account to provide a username and email
						address—and that’s it. You may provide us with more information—like your address and other information you want
						to share—but we don’t require that information to create a www.example.com account.
					</li>
				</ul>
			</li>
			<li>
				<strong>Information We Collect Automatically:</strong> We also collect some information automatically:
				<ul>
					<li>
						<em>Log Information:</em> Like most online service providers, we collect information that web browsers, mobile
						devices, and servers typically make available, such as the browser type, IP address, unique device identifiers,
						language preference, referring site, the date and time of access, operating system, and mobile network
						information. We collect log information when you use our Services— for example, when you create or make changes to
						your account on www.example.com.
					</li>
				</ul>
			</li>
			<li>
				<strong>Information We Collect from Other Sources:</strong> We may also get information about you from other
				sources. For example, if you create or log into your www.example.com account through another service (like Google)
				or if you connect your website or account to a social media service (like Twitter) through our Publicize feature, we
				will receive information from that service (such as your username, basic profile information, and friends list) via
				the authorization procedures used by that service. The information we receive depends on which services you
				authorize and any options that are available.
			</li>
		</ul>
		<h2>Links to Other Sites</h2>
		<p>
			Our Service may contain links to other sites that are not operated by us. If you click a third-party link, you will
			be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.
		</p>
		<h2>Changes to Our Privacy Policy</h2>
		<p>
			We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
			Policy on this page.
		</p>
		<h2>Contact Us</h2>
		<p>
			If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at
			privacy@example.com.
		</p>
		<p>Last updated: [insert date of last update]</p>
		<p>
			<Link href="/" legacyBehavior>
				<a>Back to Home</a>
			</Link>
		</p>
	</div>
);
export default PrivacyPolicy;

