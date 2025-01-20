import { useContext, useEffect } from 'react'
import Container from '../container/Container'
import Card from '../card/Card'
import cls from './Content.module.css'
import { useLocation } from 'react-router'
import { CatsContext, ICatsContext } from '../../context/CatsContext'
import { useInView } from 'react-intersection-observer'

export interface ICat {
	id: string
	url: string
	favorite: boolean
}

export default function Content() {
	const { cats, favoriteCats, addMoreCats } = useContext(
		CatsContext
	) as ICatsContext

	const location = useLocation()

	const { ref, inView } = useInView({
		threshold: 0.5,
	})

	useEffect(() => {
		if (inView) {
			addMoreCats()
		}
	}, [inView])

	return (
		<>
			<Container>
				{location.pathname === '/' ? (
					<>
						<div className={cls.cards}>
							{cats.map(cat => (
								<Card key={cat.id} cat={cat} />
							))}
						</div>
						{cats.length !== 0 && (
							<div ref={ref} className={cls.loadingBanner}>
								... загружаем еще котиков ...
							</div>
						)}
					</>
				) : (
					<div className={cls.cards}>
						{favoriteCats.map(cat => (
							<Card key={cat.id} cat={cat} />
						))}
					</div>
				)}
			</Container>
		</>
	)
}
