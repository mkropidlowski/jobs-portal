import PageLayout from 'components/molecules/PageLayout/PageLayout';
import Hero from 'components/organisms/Hero/Hero';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<PageLayout title="JobsPortal - Find your dream job" description="Jobs Portal for your dream job">
			<Hero />
		</PageLayout>
	);
};

export default Home;
