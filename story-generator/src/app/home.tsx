import { useState } from 'react'
import InputBox from '../components/generator/input'
import HistoryCard from '../components/history/card'
import postLyrics from '../apis/postLyrics'

const Generator = () => {
  const [lyrics, setLyrics] = useState<string>('')
  const [story, setStory] = useState<string>('')

  const handleGenerateClick = async () => {
    const prompt: string = '0 | 3 | ' + lyrics

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
        <textarea
          className="w-full h-[10rem] p-2 resize-none border rounded-md border-gray-200 tansition focus:outline-none placeholder:text-gray-400"
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
          placeholder="이야기로 재바꿈하고픈 가사를 입력하세요"
        />
      </div>
      <button
        className="self-end flex justify-center items-center p-1 w-20 text-sm border border-gray-200 rounded-md bg-gray-100 hover:bg-pink-100 hover:border-pink-200 hover:translate-y-[1px] active:bg-pink-200 cursor-pointer ease-in"
        onClick={() => handleGenerateClick()}
      >
        generate
      </button>
      <InputBox value={story} label="new story is here! 😃" placeholder="0.<" />
    </div>
  )
}

function HomePage() {
  return (
    <div className="flex flex-col w-1/2 gap-5">
      <div className="text-gray-500 text-2xl">가사를 이야기로 바꾸자!</div>
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
