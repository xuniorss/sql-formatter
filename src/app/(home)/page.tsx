'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useCallback, useState } from 'react'

export default function Home() {
	const [sql, setSql] = useState('')
	const [outputSql, setOutputSql] = useState('')

	const formatSql = useCallback((sqlText: string): string => {
		let cleanSql = Array.from(sqlText)
			.filter((char) => char.charCodeAt(0) <= 127)
			.join('')

		const lines = cleanSql
			.split('\n')
			.map((line) => line.trim())
			.filter((line) => line !== '')

		const formattedLines = lines.map((line, index) => {
			const suffix = index < lines.length - 1 ? ',' : ''
			return `\t AS ${line}${suffix}`
		})

		return `SELECT DISTINCT\n${formattedLines.join('\n')}\nFROM`
	}, [])

	const handleClick = useCallback(() => {
		const formatted = formatSql(sql)
		setOutputSql(formatted)
	}, [formatSql, sql])

	return (
		<section className="grid grid-cols-2 gap-x-8">
			<div className="flex flex-col gap-y-4">
				<Textarea
					value={sql}
					onChange={(ev) => setSql(ev.target.value)}
					rows={35}
					className="resize-none"
				/>
				<Button onClick={handleClick} disabled={sql.length <= 0}>
					Ajustar
				</Button>
			</div>

			<section>
				<div className="h-[48.75rem] overflow-y-auto rounded-lg border-2 border-zinc-700">
					<pre className="p-2">{outputSql}</pre>
				</div>
			</section>
		</section>
	)
}
