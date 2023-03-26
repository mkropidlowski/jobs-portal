import clsx from 'clsx';
import Button from 'components/atoms/Button/Button';
import Link from 'next/link';
import styles from './footer.module.scss';
import { footerMocks } from './Links.mocks';

export interface IFooter {
	links?: IFooter[];
	className?: string;
}

const Footer: React.FC<IFooter> = ({ links = footerMocks, className, ...rest }) => (
	<footer className={clsx(styles.footer, className)} {...rest}>
		<div className={styles.linksBox}>
			<ul className={styles.linksList}>
				{Object.values(links).map(({ id, text, redirectToComponent }) => {
					const linkHref = `/#${id}`;
					const hrefToComponent = `/${id}`;
					return (
						<li key={text} className={styles.link}>
							{redirectToComponent ? (
								<Link href={hrefToComponent}>
									<Button type="button" color="quaternary">
										{text}
									</Button>
								</Link>
							) : (
								<Link href={linkHref}>
									<Button type="button" color="quaternary">
										{text}
									</Button>
								</Link>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	</footer>
);

export default Footer;

