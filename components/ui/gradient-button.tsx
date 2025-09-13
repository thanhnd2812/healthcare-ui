import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const gradientButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-light transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        orange: "bg-gradient-to-t from-[#FFCC21] to-[#FF963C] text-white hover:from-[#cfa313] hover:to-[#FF963C]",
        // Add more gradient variants here as needed
      },
      size: {
        sm: "px-8 py-2 text-sm h-10",
        default: "px-16 py-3 text-base h-14",
        lg: "px-20 py-4 text-lg h-16",
      },
    },
    defaultVariants: {
      variant: "orange",
      size: "default",
    },
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  loading?: boolean
  loadingText?: string
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, loading, loadingText, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? loadingText || "読み込み中..." : children}
      </button>
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
