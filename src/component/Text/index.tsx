import React from 'react'
import cl from "./style.module.css"
import cn from 'classnames'

interface TextProps {
	options: "h1" | "h2" | "h3" | "h4" | "text"
	children: string
}

const Text = ({ options, children }: TextProps): JSX.Element => {
	return <div className={cn({
		[cl.title_h1]: options === "h1",
		[cl.title_h2]: options === "h2",
		[cl.title_h3]: options === "h3",
		[cl.title_h4]: options === "h4",
		[cl.text]: options === "text",
	})}>{children}</div>
}

export default Text