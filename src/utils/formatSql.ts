import { cleanSql } from './cleanSql'
import { formatLines } from './formatLines'

export const formatSql = (sqlText: string): string => {
	let cleanedSql = cleanSql(sqlText)

	const lines = cleanedSql
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line !== '')

	const formattedLines = formatLines(lines)

	return `SELECT DISTINCT\n${formattedLines.join('\n')}\nFROM`
}
