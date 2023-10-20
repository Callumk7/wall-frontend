import { CheckIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { forwardRef, useState } from "react";
import { Checkbox as AriaCheckbox, CheckboxProps } from "react-aria-components";

interface FullCheckboxProps extends CheckboxProps {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, FullCheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <AriaCheckbox
        ref={ref}
        {...props}
        className={clsx(
          className,
          "flex items-center gap-x-2 text-base text-gray-900 selected:border-blue-600",
        )}
      >
        <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-foreground pressed:border-red-400 selected:border-blue-600">
          <CheckIcon aria-hidden="true" className="h-5 w-5 text-white" />
        </div>
        {label}
      </AriaCheckbox>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
