import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-2xl border border-border bg-sidebar px-4 py-3 text-base text-text-primary placeholder:text-text-muted transition-all duration-300 ease-out focus-visible:outline-none focus-visible:border-[#D4AF37] focus-visible:ring-2 focus-visible:ring-[rgba(212,175,55,0.2)] focus-visible:shadow-lg focus-visible:shadow-[rgba(212,175,55,0.1)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
