interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({
  className = "",
  ...props
}: TextareaProps) {

  return (

    <textarea
      {...props}
      className={`w-full rounded-2xl border border-zinc-300 px-5 py-4 text-base outline-none transition focus:border-black ${className}`}
    />

  )

}