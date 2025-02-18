export const formatDate = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date)
}
