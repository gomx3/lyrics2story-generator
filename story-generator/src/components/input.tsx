interface InputBoxProps {
  label: string
}

const InputBox: React.FC<InputBoxProps> = ({ label }) => {
  return (
    <div className="w-full">
      <div className="text-m text-gray-800 dark:text-white">{label}</div>
      <textarea className="resize-none border rounded focus:outline-none" />
    </div>
  )
}

export default InputBox
