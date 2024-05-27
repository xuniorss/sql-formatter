export const formatLines = (lines: string[]) =>
	lines.map((line, idx) => {
		const suffix = idx < lines.length - 1 ? ',' : ''
		return `\t AS ${line}${suffix}`
	})
