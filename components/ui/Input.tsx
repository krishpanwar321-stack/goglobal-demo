interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`w-full rounded-2xl border border-zinc-300 px-5 py-4 outline-none transition focus:border-black ${className}`}
    />
  )
}