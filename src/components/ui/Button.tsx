import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-heading font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:bg-neutral-200 shadow-sm",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        outline:
          "border border-white/10 bg-transparent text-white hover:bg-white/10 shadow-sm",
        secondary:
          "bg-neutral-900 text-white hover:bg-neutral-800 border border-white/5",
        ghost: "hover:bg-neutral-900 hover:text-white",
        link: "text-accent-cyan underline-offset-4 hover:underline",
        glow: "border border-accent-cyan/30 bg-black text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:bg-accent-cyan hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
        glowPurple: "border border-accent-purple/30 bg-black text-accent-purple shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:bg-accent-purple hover:text-black hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
