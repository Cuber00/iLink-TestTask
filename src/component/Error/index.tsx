import React from 'react'
import cl from './style.module.css'
import cn from 'classnames'
import { IError } from '../icons/IError'

interface ErrorProps {
	children: string
}

const Error = ({ children }: ErrorProps): JSX.Element => {
	return (
		<div className={cn(cl.error)}><IError />{children}</div>
	)
}

export default Error