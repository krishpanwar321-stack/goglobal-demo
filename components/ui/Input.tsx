interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: InputProps) {

  return (

    <input
      {...props}
      className={`h-14 w-full rounded-2xl border border-zinc-300 px-5 text-base outline-none transition focus:border-black ${className}`}
    />

  )

}