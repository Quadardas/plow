export function formatDate(date: string): string {
	const myDate = new Date(date).toLocaleDateString('ru-RU');
	return myDate.split('.').reverse().join('-')
}