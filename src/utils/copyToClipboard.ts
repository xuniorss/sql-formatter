import { toast } from '@/components/ui/use-toast'

export const copyToClipboard = async (sql: string | null): Promise<void> => {
	try {
		if (!sql) return

		await navigator.clipboard.writeText(sql)
		toast({ title: 'SQL formatada copiada' })
	} catch (error) {
		toast({ title: 'Houve um problema ao copiar SQL' })
		console.error(error)
	}
}
