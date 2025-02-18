interface InputBoxProps {
  label: string
  value: string
  placeholder: string
}

const InputBox: React.FC<InputBoxProps> = ({ label, value, placeholder = '' }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="py-2 text-m text-gray-800 dark:text-white">{label}</div>
      <textarea
        className="w-full h-[10rem] p-2 resize-none border rounded-md border-gray-200 tansition focus:outline-none placeholder:text-gray-400"
        value={value}
        placeholder={placeholder}
        readOnly
      />
    </div>
  )
}

export default InputBox
