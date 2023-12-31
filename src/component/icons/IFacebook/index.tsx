import React from 'react'
import cl from '../style.module.css'
import cn from 'classnames'

export const IFacebook = (): JSX.Element => {
	return (
		<svg className={cn(cl.svg, cl.i_fill)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path d="M21.75 12.0596C21.75 6.6419 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.6419 2.25 12.0596C2.25 16.9558 5.81542 21.0141 10.4766 21.75V14.8952H8.00098V12.0596H10.4766V9.89841C10.4766 7.43988 11.9322 6.08187 14.1593 6.08187C15.2257 6.08187 16.3418 6.27346 16.3418 6.27346V8.68754H15.1124C13.9013 8.68754 13.5234 9.44376 13.5234 10.2203V12.0596H16.2275L15.7953 14.8952H13.5234V21.75C18.1846 21.0141 21.75 16.9558 21.75 12.0596Z" />
		</svg>
	)
}