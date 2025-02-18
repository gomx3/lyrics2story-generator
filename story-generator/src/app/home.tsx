import InputBox from '../components/input'

const Generator = () => {
  return (
    <div>
      <InputBox label="your lyrics" />
      <InputBox label="generated story is here! 😃" />
    </div>
  )
}

function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="w-full text-gray-500 text-2xl">lyrics2story</div>
      <div className="flex flex-row">
        <Generator />
        <div>menu</div>
      </div>
    </div>
  )
}

export default HomePage
