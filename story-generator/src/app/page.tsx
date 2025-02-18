import { useState } from 'react'
import InputBox from '../components/generator/input'
import CardList from '../components/history/cardList'
import postLyrics from '../apis/postLyrics'
import { emotions } from '../constants'
import { StoryData } from '../interface'

const Generator = () => {
  const [lyrics, setLyrics] = useState<string>('')
  const [story, setStory] = useState<string>('')
  const [selectedEmotions, setSelectedEmotions] = useState<number[]>([])

  // 감정 선택 핸들러
  const handleEmotionSelect = (index: number) => {
    setSelectedEmotions((prev) => {
      if (prev.includes(index)) {
        return prev.filter((e) => e !== index)
      } else if (prev.length < 2) {
        return [...prev, index]
      } else {
        return prev
      }
    })
  }

  // 이야기 생성 버튼 핸들러
  const handleGenerateClick = async () => {
    const prompt: string = `${selectedEmotions[0]} | ${selectedEmotions[1]} | ` + lyrics

    try {
      const data = await postLyrics(prompt)
      setStory(data?.generated_story)

      const newStory: StoryData = {
        id: window.crypto.randomUUID(),
        date: new Date(),
        lyrics: lyrics,
        story: data?.generated_story,
      }

      const existingStories = JSON.parse(localStorage.getItem('stories') || '[]')
      existingStories.push(newStory)
      localStorage.setItem('stories', JSON.stringify(existingStories))
    } catch (error) {
      console.error('API 요청 실패:', error)
    }
  }

  return (
    <div className="flex flex-col justify-center w-2/3 gap-2">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-between">
          <div className="py-2 text-m text-gray-800 dark:text-white">your lyrics</div>
          <div className="flex flex-row gap-2 mb-2">
            {emotions.map((e) => (
              <button
                key={e.index}
                className={
                  selectedEmotions.includes(e.index) ? 'btn btn-blue btn-blue-active px-2' : 'btn btn-blue px-2'
                }
                onClick={() => handleEmotionSelect(e.index)}
              >
                {e.label}
              </button>
            ))}
          </div>
        </div>
        <textarea
          className="w-full h-[10rem] p-2 resize-none border rounded-md border-gray-200 tansition focus:outline-none placeholder:text-gray-400"
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
          placeholder="이야기로 재바꿈하고픈 가사를 입력하세요."
        />
      </div>
      <button className="btn btn-pink self-end w-20" onClick={() => handleGenerateClick()}>
        generate
      </button>
      <InputBox value={story} label="new story is here! 😃" placeholder="여기에 이야기가 생성됩니다..." />
    </div>
  )
}

function HomePage() {
  return (
    <div className="flex flex-col w-2/3 gap-5">
      <div className="text-gray-500 text-3xl">가사를 이야기로 바꾸자!</div>
      <div className="flex flex-row gap-10 justify-between items-end">
        <Generator />
        <CardList />
      </div>
    </div>
  )
}

export default HomePage
