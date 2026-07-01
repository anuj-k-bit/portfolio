import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-heading transition-all duration-300 focus:outline-none select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neutral-900 text-white hover:bg-neutral-800",
        secondary:
          "border-transparent bg-neutral-800/80 text-neutral-300 hover:bg-neutral-800",
        destructive:
          "border-transparent bg-red-950/50 text-red-500 border border-red-500/20",
        outline: "text-neutral-300 border-white/10 hover:bg-white/5",
        glow: "border-accent-cyan/30 bg-black text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:bg-accent-cyan/10 hover:border-accent-cyan/50",
        glowPurple: "border-accent-purple/30 bg-black text-accent-purple shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:bg-accent-purple/10 hover:border-accent-purple/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
