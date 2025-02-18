import InputBox from '../components/input'

const Generator = () => {
  return (
    <div className="flex flex-col justify-center w-2/3 h-full gap-3">
      <InputBox label="your lyrics" />
      <button className="flex justify-center items-center p-1 w-20 text-sm border border-gray-200 rounded-lg bg-gray-100 hover:bg-pink-100 hover:border-pink-200 hover:translate-y-[1px] active:bg-pink-200 cursor-pointer ease-in">
        generate
      </button>
      <InputBox label="new story is here! 😃" />
    </div>
  )
}

function HomePage() {
  return (
    <div className="flex flex-col w-1/2 h-2/3 gap-5">
      <div className="text-gray-500 text-2xl">가사를 이야기로 바꾸자!</div>
      <div className="flex flex-row gap-10 justify-between">
        <Generator />
        <div className="w-1/3">archive</div>
      </div>
    </div>
  )
}

export default HomePage
