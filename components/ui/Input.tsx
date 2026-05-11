type InputProps = {
    type?: string
    placeholder?: string
  }
  
  export default function Input({
    type = "text",
    placeholder,
  }: InputProps) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-zinc-300 px-5 py-4 outline-none transition focus:border-black"
      />
    )
  }