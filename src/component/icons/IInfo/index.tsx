import React from 'react'
import cl from '../style.module.css'
import cn from 'classnames'

export const IInfo = (): JSX.Element => {
	return (
		<svg className={cn(cl.svg, cl.i_stroke)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6117 2.29175H6.38758C3.87008 2.29175 2.29175 4.07425 2.29175 6.59675V13.4034C2.29175 15.9259 3.86258 17.7084 6.38758 17.7084H13.6109C16.1367 17.7084 17.7084 15.9259 17.7084 13.4034V6.59675C17.7084 4.07425 16.1367 2.29175 13.6117 2.29175Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M9.99552 13.3335V10.0001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M9.9916 6.83695H9.99993" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	)
}