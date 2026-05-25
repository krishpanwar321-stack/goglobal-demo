type InterestCardProps = {
    title: string
    tags: string[]
    selected: boolean
    onClick: () => void
  }
  
  export default function InterestCard({
    title,
    tags,
    selected,
    onClick,
  }: InterestCardProps) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`
          rounded-[32px]
          border
          p-5
          text-left
          transition-all
          duration-300
          hover:-translate-y-1
  
          ${
            selected
              ? "border-black bg-black text-white"
              : "border-zinc-200 bg-white text-black hover:border-black"
          }
        `}
      >
        <h3 className="text-lg font-semibold tracking-tight">
          {title}
        </h3>
  
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`
                rounded-full
                px-3
                py-1
                text-xs
                font-medium
  
                ${
                  selected
                    ? "bg-white/10 text-zinc-200"
                    : "bg-zinc-100 text-zinc-600"
                }
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </button>
    )
  }