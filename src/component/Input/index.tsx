import React, { useState } from 'react'
import cl from './style.module.css'
import cn from 'classnames'
import Error from '../Error'
interface InputProps {
	title?: string,
	placeholder?: string,
	error?: string,
	disabled?: boolean
}

const Input = ({ title, placeholder, error, disabled }: InputProps): JSX.Element => {
	const [value, setValue] = useState("");
	return (

		<div className={cn(cl.wrapp, {
			[cl.error]: error,
			[cl.disabled]: disabled
		})}>
			{title && <div className={cl.title}>{title}</div>}
			<input className={cn(cl.input)} type="text" placeholder={placeholder} disabled={disabled} value={value} onChange={(e) => setValue(e.target.value)} />
			{error && <Error>{error}</Error>}
		</div>
	)
}

export default Input