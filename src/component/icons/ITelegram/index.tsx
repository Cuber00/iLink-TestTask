import React from 'react'
import cl from '../style.module.css'
import cn from 'classnames'

export const ITelegram = (): JSX.Element => {
	return (
		<svg className={cn(cl.svg, cl.i_fill)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12ZM12.3482 9.44812C11.3999 9.84257 9.50459 10.659 6.66226 11.8973C6.20071 12.0809 5.95893 12.2604 5.93692 12.436C5.89973 12.7327 6.27131 12.8495 6.7773 13.0087C6.84613 13.0303 6.91744 13.0527 6.99055 13.0765C7.48837 13.2383 8.15802 13.4276 8.50615 13.4351C8.82193 13.442 9.17438 13.3118 9.5635 13.0446C12.2192 11.2519 13.59 10.3458 13.6761 10.3263C13.7368 10.3125 13.821 10.2952 13.878 10.3459C13.935 10.3965 13.9294 10.4925 13.9233 10.5182C13.8865 10.6752 12.4279 12.0312 11.6731 12.7329C11.4378 12.9517 11.2709 13.1069 11.2368 13.1423C11.1604 13.2217 11.0825 13.2968 11.0076 13.369C10.5451 13.8148 10.1983 14.1492 11.0268 14.6951C11.4249 14.9575 11.7435 15.1745 12.0614 15.3909C12.4085 15.6273 12.7547 15.8631 13.2027 16.1567C13.3168 16.2315 13.4258 16.3092 13.5319 16.3849C13.9359 16.6729 14.2988 16.9316 14.7472 16.8904C15.0077 16.8664 15.2769 16.6214 15.4135 15.8908C15.7365 14.164 16.3714 10.4227 16.5182 8.88103C16.531 8.74596 16.5148 8.57309 16.5019 8.49721C16.4889 8.42133 16.4617 8.31321 16.3631 8.23317C16.2463 8.13838 16.0659 8.11839 15.9853 8.11981C15.6186 8.12627 15.0559 8.32191 12.3482 9.44812Z" />
		</svg>
	)
}