import { ReactNode } from 'react'
import cls from './Container.module.css'

export default function Container({ children }: { children: ReactNode }) {
	return <div className={cls.container}>{children}</div>
}
