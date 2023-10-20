import clsx from "clsx";
import {
  Input as AriaInput,
  Label,
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

export function Input({
  label,
  description,
  errorMessage,
  className,
  ...props
}: InputProps) {
  return (
    <TextField {...props} className={clsx("flex flex-col gap-1", className)}>
      <Label className="text-sm text-gray-700">{label}</Label>
      <AriaInput className="rounded-md border border-foreground bg-background-input p-1" />
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </TextField>
  );
}
