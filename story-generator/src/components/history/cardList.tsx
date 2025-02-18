import { useEffect, useState } from 'react'
import HistoryCard from './card'
import { StoryData } from '../../interface'

const CardList = () => {
  const [data, setData] = useState<StoryData[]>([])

  useEffect(() => {
    const stories = localStorage.getItem('stories')
    if (stories) {
      setData(JSON.parse(stories))
    }
  }, [])

  return (
    <div className="w-1/3 h-[30rem] p-2 border rounded-md bg-white overflow-y-auto">
      <div>archive</div>
      <div className="h-[1px] my-2 bg-gray-300"></div>
      <div className="flex flex-col">
        {data.map((d) => (
          <HistoryCard key={d.id} id={d.id} date={d.date} lyrics={d.lyrics} />
        ))}
      </div>
    </div>
  )
}

export default CardList
