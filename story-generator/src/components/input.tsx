interface InputBoxProps {
  label: string
}

const InputBox: React.FC<InputBoxProps> = ({ label }) => {
  return (
    <div>
      <div className="text-m text-gray-800 dark:text-white">{label}</div>
      <textarea className="w-full h-full p-2 resize-none border rounded-md tansition focus:outline-none placeholder:text-gray-400" />
    </div>
  )
}

export default InputBox
