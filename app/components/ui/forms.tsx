import clsx from "clsx";
import { forwardRef } from "react";
import {
  Input as AriaInput,
  Label,
  NumberField as AriaNumberField,
  NumberFieldProps,
  Text,
  TextField,
  TextFieldProps,
} from "react-aria-components";

interface InputProps extends TextFieldProps {
  className?: string;
  label?: string;
  description?: string;
  errorMessage?: string;
}

// TODO: needs to be styled correctly
const Input = forwardRef<HTMLInputElement, InputProps>(({className, label, description, errorMessage, ...props}, ref) => {
  return (
    <TextField ref={ref} {...props} className={clsx("flex flex-col gap-1", className)}>
      <Label className="text-sm text-gray-700">{label}</Label>
      <AriaInput className="rounded-md border border-foreground bg-background-input w-full p-1" />
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </TextField>
  );
})
Input.displayName = "Input"

export { Input }
