type TextareaProps = {
    placeholder?: string
    rows?: number
  }
  
  export default function Textarea({
    placeholder,
    rows = 6,
  }: TextareaProps) {
    return (
      <textarea
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-2xl border border-zinc-300 px-5 py-4 outline-none transition focus:border-black"
      />
    )
  }