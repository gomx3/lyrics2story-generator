import { useState } from 'react'
import InputBox from '../components/generator/input'
import HistoryCard from '../components/history/card'
import postLyrics from '../apis/postLyrics'

const Generator = () => {
  const [lyrics, setLyrics] = useState<string>('')
  const [story, setStory] = useState<string>('')
  const [selectedEmotions, setSelectedEmotions] = useState<number[]>([])

  const emotions = [
    { index: 0, label: '기쁨' },
    { index: 1, label: '당황' },
    { index: 2, label: '분노' },
    { index: 3, label: '불안' },
    { index: 4, label: '상처' },
    { index: 5, label: '슬픔' },
  ]

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

  const handleGenerateClick = async () => {
    const prompt: string = `${selectedEmotions[0]} | ${selectedEmotions[1]} | ` + lyrics

    try {
      const data = await postLyrics(prompt)
      setStory(data?.generated_story)
    } catch (error) {
      console.error('API 요청 실패:', error)
    }
  }

  return (
    <div className="flex flex-col justify-center w-2/3 gap-2">
      <div className="flex flex-col justify-between">
        <div className="py-2 text-m text-gray-800 dark:text-white">your lyrics</div>
        <div className="flex flex-row gap-2 mb-2 self-end">
          {emotions.map((e) => (
            <button
              key={e.index}
              className={selectedEmotions.includes(e.index) ? 'btn btn-blue btn-blue-active px-2' : 'btn btn-blue px-2'}
              onClick={() => handleEmotionSelect(e.index)}
            >
              {e.label}
            </button>
          ))}
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
      <InputBox value={story} label="new story is here! 😃" placeholder="이야기가 생성됩니다..." />
    </div>
  )
}

function HomePage() {
  return (
    <div className="flex flex-col w-2/3 gap-5">
      <div className="text-gray-500 text-3xl">가사를 이야기로 바꾸자!</div>
      <div className="flex flex-row gap-10 justify-between">
        <Generator />
        <div className="w-1/3 p-2 border rounded-md bg-white">
          <div>archive</div>
          <div className="h-[1px] my-2 bg-gray-300"></div>
          <div className="flex flex-col h-full">
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
