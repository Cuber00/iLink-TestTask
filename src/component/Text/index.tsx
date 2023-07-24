import React from 'react'
import cl from "./style.module.css"
import cn from 'classnames'

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
	options: "h1" | "h2" | "h3" | "h4" | "text"
	children: string,
	className?: string
}

const Text = ({ options, children, className }: TextProps): JSX.Element => {
	return <div className={cn(className, {
		[cl.title_h1]: options === "h1",
		[cl.title_h2]: options === "h2",
		[cl.title_h3]: options === "h3",
		[cl.title_h4]: options === "h4",
		[cl.text]: options === "text",
	})}>{children}</div>
}

export default Text