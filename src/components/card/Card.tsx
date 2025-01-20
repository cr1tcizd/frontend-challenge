import { ICat } from '../content/Content'
import cls from './Card.module.css'

import FavoriteSvg from './../../assets/favorite.svg?react'
import FavoriteClickedSvg from './../../assets/favoriteClicked.svg?react'
import { useContext } from 'react'
import { CatsContext, ICatsContext } from '../../context/CatsContext'

interface CardProps {
	cat: ICat
}

export default function Card({ cat }: CardProps) {
	const { addFavorite } = useContext(CatsContext) as ICatsContext
	const handleFavoriteClick = () => {
		addFavorite(cat)
	}
	return (
		<div
			className={cls.card}
			style={{
				backgroundImage: `url(${cat.url})`,
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
			}}
		>
			{cat.favorite ? (
				<FavoriteClickedSvg
					className={`${cls.favorite}`}
					onClick={handleFavoriteClick}
				/>
			) : (
				<FavoriteSvg
					className={`${cls.favorite}`}
					onClick={handleFavoriteClick}
				/>
			)}
		</div>
	)
}
