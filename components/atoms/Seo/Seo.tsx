import Head from 'next/head';
import { FC } from 'react';

interface Props {
	title: string;
	description: string;
}

const Seo: FC<Props> = ({ title, description }) => (
	<Head>
		<title>{title}</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta
			name="keywords"
			content="www, website, github, linkedin, front-end, oferty Pracy, praca, szukam Pracy, junior, senior, mid, wysokie wynagrodzenie,junior front-end, tworzenie stron www, projektowanie, post, blog, react, next.js, scss, mobile, webdesing, klient, atrakcyjne ceny"
		/>
		<meta name="robots" content="index, follow" />
		<meta name="description" content={description} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
	</Head>
);

export default Seo;

