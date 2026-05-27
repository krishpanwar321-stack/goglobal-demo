type BadgeProps = {
    children: React.ReactNode
  }
  
  export default function Badge({
    children,
  }: BadgeProps) {
    return (
      <div className="rounded-full bg-zinc-200 px-4 py-2 text-sm">
        {children}
      </div>
    )
  }