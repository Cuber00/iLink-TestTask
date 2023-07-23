import React from 'react'
import cl from './style.module.css'
import { IArrow } from '../icons'
import cn from 'classnames'

interface ArrowProps {
	disabled?: boolean,
	options?: "rigth" | "left"
}

const Arrow = ({ disabled = false, options = "rigth" }: ArrowProps): JSX.Element => {
	return (
		<button className={cn(cl.wrapp, {
			[cl.disabled]: disabled,
			[cl.left]: options === "left",
		})}
			disabled={disabled}
		>
			<IArrow />
		</button>
	)
}

export default Arrow