import React from 'react'
import cn from 'classnames'
import cl from './style.module.css'
import Text from '../Text'
import { IClose } from '../icons'
import { useMediaQueries } from '../../hooks/useMediaQuery'

interface FlashProps {
	options: "success" | "error"
}

const Flash = ({ options }: FlashProps): JSX.Element => {
	const { sm } = useMediaQueries()
	const title = (options === "success") ? "Успешно!" : "Что-то не так...";
	const desc = (options === "success") ? "Спасибо за отзыв о нашей компании :)" : "Не получилось отправить отзыв. Попробуйте еще раз!";
	return (
		<div className={cn(cl.wrapp, {
			[cl.success]: options === "success",
			[cl.error]: options === "error"
		})}>
			<div className={cl.content}>
				<div className={cl.text}>

					<Text className={cl.title} options={sm ? "h3" : "h4"}>{title}</Text>
					<Text options='text'>{desc}</Text>
				</div>
				<div className={cl.btn}>
					<IClose className={cl.icon} />
				</div>
			</div>
		</div>
	)
}

export default Flash