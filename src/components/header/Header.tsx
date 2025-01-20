import { Link } from 'react-router'
import Container from '../container/Container'
import cls from './Header.module.css'
export default function Header() {
	return (
		<header className={cls.header}>
			<Container>
				<nav className={cls.nav}>
					<Link className={cls.btn} to={'/'}>
						Все котики
					</Link>
					<Link className={cls.btn} to={'/favorite'}>
						Любимые котики
					</Link>
				</nav>
			</Container>
		</header>
	)
}
