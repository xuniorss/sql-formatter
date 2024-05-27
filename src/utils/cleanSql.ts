export const cleanSql = (sqlText: string): string =>
	Array.from(sqlText)
		.filter((char) => char.charCodeAt(0) <= 127)
		.join('')
