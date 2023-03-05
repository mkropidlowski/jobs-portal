import styles from './pageLayout.module.scss';
import { ReactNode } from 'react';
import Seo from 'components/atoms/Seo/Seo';
import Navbar from '../NavBar/Navbar';

export interface IPageLayout {
	children: ReactNode;
	title: string;
	description: string;
}

const PageLayout: React.FC<IPageLayout> = ({ title, description, children }) => (
	<div className={styles.wrapper}>
		<Seo title={title} description={description} />
		<Navbar />
		<main className={styles.container}>{children}</main>
		{/* Footer in future <Footer /> */}
	</div>
);

export default PageLayout;

