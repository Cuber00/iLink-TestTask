import React from 'react';
import cn from 'classnames';

import cl from './style.module.css';
import { IPlus } from '../icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	option?: "1" | "2" | "3",
	children: string,
	disabled?: boolean

}
const Button = ({ option = "1", disabled = false, children }: ButtonProps): JSX.Element => {
	return (
		<button className={cn(cl.btn, {
			[cl.white]: option === "1",
			[cl.purple]: option !== "1",
		})}
			disabled={disabled}>
			<span>
				{option === "3" && <IPlus className={cl.icon} />}
				{children}
			</span>
		</button>
	)
}

export default Button