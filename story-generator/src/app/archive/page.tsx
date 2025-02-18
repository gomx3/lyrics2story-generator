import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { StoryData } from '../../interface'
import { formatDate } from '../../utils/formateDate'

type ArchivePageParams = {
  id: string
}

type TextBoxParams = {
  label: string
  text: string
}

const TextBox: React.FC<TextBoxParams> = ({ label, text = '' }) => {
  return (
    <div>
      <div className="m-1 text-gray-600">{label}</div>
      <div className="p-2 border rounded-md border-gray-200 bg-white">{text}</div>
    </div>
  )
}

const ArchivePage = () => {
  const { id } = useParams<ArchivePageParams>()
  const [data, setData] = useState<StoryData | null>(null)

  useEffect(() => {
    const stories = localStorage.getItem('stories')
    if (stories) {
      const parsedStories: StoryData[] = JSON.parse(stories)
      const storyData = parsedStories.find((s) => s.id === id)

      if (storyData) {
        setData(storyData)
      }
    }
  }, [id])

  return (
    <div className="flex flex-col items-center w-1/2 gap-3">
      <div className="m-1">{data?.date ? formatDate(data.date) : '날짜 정보 유실'}</div>
      <TextBox label="lyrics" text={data?.lyrics || '가사 정보 유실'} />
      <TextBox label="generated story" text={data?.story || '이야기 정보 유실'} />
      <Link to={`/`} className="btn btn-pink self-start">
        돌아가기
      </Link>
    </div>
  )
}
export default ArchivePage
