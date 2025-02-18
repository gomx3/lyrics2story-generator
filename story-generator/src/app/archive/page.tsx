import { useEffect, useState } from 'react'
import { StoryData } from '../../interface'
import { useParams } from 'react-router-dom'

type ArchivePageParams = {
  id: string
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

  return <div className="text-xl">{data?.story}</div>
}
export default ArchivePage
