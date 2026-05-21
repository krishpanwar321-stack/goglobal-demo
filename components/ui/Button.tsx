type ButtonProps = {
    children: React.ReactNode
    variant?: "primary" | "secondary"
    type?: "button" | "submit"
  }
  
  export default function Button({
    children,
    variant = "primary",
    type = "button",
  }: ButtonProps) {
  
    const baseStyles =
      "rounded-2xl px-8 py-4 transition"
  
    const variants = {
      primary:
        "bg-black text-white hover:bg-zinc-800",
  
      secondary:
        "border border-zinc-300 bg-white hover:bg-zinc-100",
    }
  
    return (
      <button
        type={type}
        className={`${baseStyles} ${variants[variant]}`}
      >
        {children}
      </button>
    )
  }