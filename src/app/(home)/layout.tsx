import { ReactNode } from 'react'

export default function HomeLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<article className="space-y-2 p-10">
			<h2 className="text-xl font-semibold">SQL Formatter</h2>
			{children}
		</article>
	)
}
