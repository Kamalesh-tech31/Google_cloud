import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#D4AF37] to-[#E6C766] text-black hover:shadow-lg hover:shadow-[rgba(212,175,55,0.3)] hover:scale-105 active:scale-95",
        secondary:
          "border border-[#D4AF37] bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-lg hover:shadow-[rgba(212,175,55,0.2)]",
        outline:
          "border border-[#232323] bg-[#0A0A0A] text-[#FFFFFF] hover:bg-[#141414] hover:border-[#D4AF37]/50",
        ghost:
          "text-[#FFFFFF] hover:bg-[#141414] hover:text-[#D4AF37]",
        destructive:
          "bg-[#EF4444] text-white hover:bg-[#DC2626] hover:shadow-lg hover:shadow-[rgba(239,68,68,0.3)]",
        link: "text-[#D4AF37] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
