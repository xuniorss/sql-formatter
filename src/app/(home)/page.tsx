'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { formatSql } from '@/utils/formatSql'
import { ClipboardCopy, Eraser } from 'lucide-react'
import { useCallback, useState } from 'react'

export default function Home() {
	const [sql, setSql] = useState('')
	const [outputSql, setOutputSql] = useState<string | null>(null)

	const handleClick = useCallback(() => {
		const formatted = formatSql(sql)
		setOutputSql(formatted)
	}, [sql])

	const handleClear = useCallback(async () => {
		setSql('')
		setOutputSql(null)
		await navigator.clipboard.writeText('')
	}, [])

	return (
		<section className="grid grid-cols-2 gap-x-8">
			<div className="flex flex-col space-y-4">
				<Textarea
					value={sql}
					onChange={(ev) => setSql(ev.target.value)}
					rows={35}
					className="resize-none"
				/>
				<div className="flex w-full flex-row gap-x-4">
					<Button
						className="w-2/4"
						onClick={handleClick}
						disabled={sql.length <= 0}
					>
						Ajustar
					</Button>
					<Button
						className="w-2/4"
						variant="ghost"
						onClick={handleClear}
						disabled={sql.length <= 0}
					>
						<Eraser />
					</Button>
				</div>
			</div>

			<section className="space-y-4">
				<div className="h-[718.5px] overflow-y-auto rounded-lg border-2 border-zinc-700">
					<pre className="p-2">{outputSql}</pre>
				</div>
				<Button
					className="w-full"
					disabled={!outputSql}
					variant={!outputSql ? 'outline' : 'secondary'}
					onClick={() => copyToClipboard(outputSql)}
				>
					<ClipboardCopy />
				</Button>
			</section>
		</section>
	)
}
