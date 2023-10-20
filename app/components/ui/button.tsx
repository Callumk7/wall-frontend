import clsx from "clsx";
import { Button as AriaButton, ButtonProps } from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background",
        secondary: "bg-foreground text-background",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-2 py-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface FullButtonProps extends ButtonProps, VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, FullButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <AriaButton
        className={clsx(buttonVariants({ className, variant, size }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
