import Footer from 'components/molecules/Footer/Footer';
import PageLayout from 'components/molecules/PageLayout/PageLayout';
import Hero from 'components/organisms/Hero/Hero';
import Offers from 'components/organisms/Offers/Offers';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<PageLayout title="JobsPortal - Find your dream job" description="Jobs Portal for your dream job">
			<Hero />
			<Offers />
			<Footer />
		</PageLayout>
	);
};

export default Home;
