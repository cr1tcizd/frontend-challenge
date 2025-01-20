import { createContext, ReactNode, useEffect, useState } from 'react'
import { ICat } from '../components/content/Content'

export interface ICatsContext {
	cats: ICat[]
	favoriteCats: ICat[]
	addFavorite: (cat: ICat) => void
	addMoreCats: (limit?: number) => void
}

export const CatsContext = createContext<ICatsContext | null>(null)

export const CatsProvider = ({ children }: { children: ReactNode }) => {
	const localCats = JSON.parse(localStorage.getItem('favoriteCats') || '[]')
	const [favoriteCats, setFavoriteCats] = useState<ICat[]>(localCats)
	const [cats, setCats] = useState<ICat[]>([])

	const addMoreCats = (limit = 10) => {
		fetchCats(limit).then(data => {
			let currentCats = [] as ICat[]
			currentCats = [...cats, ...data]
			const unique = currentCats
				.map(e => e.id)
				.map((e, i, final) => final.indexOf(e) === i && i)
				.filter(e => currentCats[e])
				.map(e => currentCats[e])
			console.log(unique)
			setCats(unique)
		})
	}

	const fetchCats = async (limit: number) => {
		const response = await fetch(
			`https://api.thecatapi.com/v1/images/search?limit=${limit}`,
			{
				headers: {
					'x-api-key':
						'live_NgCOGO6zcpwZgs8HQ28VmvE3Jb8Sa9PaW57so40ZhCmZjAKhzORMwYgMNV6SsSJp',
				},
			}
		)
		return await response.json()
	}

	useEffect(() => {
		fetchCats(20).then(data => setCats(data))
	}, [])

	const addFavorite = (cat: ICat) => {
		cat.favorite = !cat.favorite
		if (cat.favorite) {
			setFavoriteCats([...favoriteCats, cat])
			localStorage.setItem(
				'favoriteCats',
				JSON.stringify([...favoriteCats, cat])
			)
		} else {
			setFavoriteCats(favoriteCats.filter(item => item.id !== cat.id))
			localStorage.setItem(
				'favoriteCats',
				JSON.stringify(favoriteCats.filter(item => item.id !== cat.id))
			)
		}
	}
	return (
		<CatsContext.Provider
			value={{ favoriteCats, addFavorite, cats, addMoreCats }}
		>
			{children}
		</CatsContext.Provider>
	)
}
