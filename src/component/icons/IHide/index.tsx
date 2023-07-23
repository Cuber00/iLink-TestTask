import React from 'react'
import cl from '../style.module.css'
import cn from 'classnames'

export const IHide = (): JSX.Element => {
	return (
		<svg className={cn(cl.svg, cl.i_stroke)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
			<path d="M9.76045 14.3668C9.18545 13.7928 8.83545 13.0128 8.83545 12.1378C8.83545 10.3848 10.2474 8.9718 11.9994 8.9718C12.8664 8.9718 13.6644 9.3228 14.2294 9.8968" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M15.1046 12.699C14.8726 13.989 13.8566 15.007 12.5676 15.241" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M6.65451 17.4724C5.06751 16.2264 3.72351 14.4064 2.74951 12.1374C3.73351 9.85835 5.08651 8.02835 6.68351 6.77235C8.27051 5.51635 10.1015 4.83435 11.9995 4.83435C13.9085 4.83435 15.7385 5.52635 17.3355 6.79135" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M19.4475 8.99084C20.1355 9.90484 20.7405 10.9598 21.2495 12.1368C19.2825 16.6938 15.8065 19.4388 11.9995 19.4388C11.1365 19.4388 10.2855 19.2988 9.46753 19.0258" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M19.8868 4.24963L4.11279 20.0236" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	)
}