import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { ToggleButtonProps } from "react-aria-components";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected=true]:bg-primary",
  {
    variants: {
      variant: {
        primary: "bg-background text-foreground",
        secondary: "bg-foreground text-background",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-2 py-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

interface FullToggleButtonProps
  extends ToggleButtonProps,
    VariantProps<typeof buttonVariants> {}

const ToggleButton = forwardRef<HTMLButtonElement, FullToggleButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <AriaToggleButton
        className={clsx(buttonVariants({ className, variant, size }))}
        ref={ref}
        {...props}
      />
    );
  },
);

ToggleButton.displayName = "ToggleButton";

export { ToggleButton };
