import React from 'react'
import cl from '../style.module.css'
import cn from 'classnames'

export const IError = (): JSX.Element => {
	return (
		<svg className={cn(cl.svg, cl.error)} width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
			<path d="M5.00024 4.81506L7.40777 2.40753L7.81745 2.8172L5.40992 5.22473L7.81745 7.63226L7.40777 8.04193L5.00024 5.6344L2.59271 8.04193L2.18304 7.63226L4.59057 5.22473L2.18304 2.8172L2.59271 2.40753L5.00024 4.81506Z" />
		</svg>
	)
}

