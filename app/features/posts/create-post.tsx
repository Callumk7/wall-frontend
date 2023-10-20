import { Input, Label, TextArea, TextField } from "react-aria-components";
import { Button } from "~/components/ui/button";

export function CreatePost() {
  return (
    <form method="POST" id="createPost" className="my-4 flex flex-col items-end gap-2">
      <TextField name="body" className="w-full">
        <TextArea className="border-foreground/50 w-full resize-none rounded-md border bg-background-input p-3" />
      </TextField>
      <Button type="submit" size={"md"}>
        Send
      </Button>
    </form>
  );
}
