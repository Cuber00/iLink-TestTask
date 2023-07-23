import React from 'react'
import cl from '../style.module.css'
import cn from 'classnames'

export const IArrow = (): JSX.Element => {
	return (
		<svg className={cn(cl.svg, cl.arrow)} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M19.75 11.7256L4.75 11.7256" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	)
}

