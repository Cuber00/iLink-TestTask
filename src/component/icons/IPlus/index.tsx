import React from 'react'
import cl from '../style.module.css'
import cn from 'classnames'
import { IconProps } from '../type'

export const IPlus = (props: IconProps): JSX.Element => {
	return (
		<svg className={cn(cl.svg, cl.i_fill)} width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" />
		</svg>

	)
}
