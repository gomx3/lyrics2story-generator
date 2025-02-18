import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/formateDate'

interface CardProps {
  id: string
  date: Date
  lyrics: string
}

const HistoryCard: React.FC<CardProps> = ({ id, date, lyrics }) => {
  return (
    <Link
      to={`/archive/${id}`}
      className="flex flex-col justify-center items-center gap-2 h-20 p-2 mb-2 border rounded-md bg-gray-50 transition ease-in hover:translate-y-[1px] hover:shadow-lg hover:scale-105 "
    >
      <div className="text-gray-700 text-sm self-end">{formatDate(date)}</div>
      <div className="text-gray-500 text-xs">{lyrics.length > 50 ? `${lyrics.slice(0, 50)} ...` : lyrics}</div>
    </Link>
  )
}

export default HistoryCard
