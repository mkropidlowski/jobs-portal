import styles from './navbar.module.scss';
import { menuLinks } from './helpers';
import Link from 'next/link';
import Button from 'components/atoms/Button/Button';
import Logo from 'components/atoms/Logo/Logo';

export interface INavbarProps {
	links?: INavbarProps[];
	text?: string;
}

const Navbar: React.FC<INavbarProps> = ({ links = menuLinks }) => {
	return (
		<nav className={styles.container}>
			<Logo />
			<ul className={styles.menuLinks}>
				{Object.values(links).map(({ id, text }) => {
					const linkHref = `/#${id}`;
					return (
						<li key={text} className={styles.links}>
							<Link href={linkHref}>
								<Button type="button" color="secondary">
									{text}
								</Button>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

