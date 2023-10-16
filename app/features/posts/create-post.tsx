import { Input, Label, TextField } from "react-aria-components";
import { Button } from "~/components/ui/button";

export function CreatePost() {
  return (
    <form method="POST" id="createPost">
      <TextField>
        <Label>Post a Message</Label>
        <Input />
      </TextField>
      <input type="text" name="body" placeholder="enter your message here" />
      <input type="hidden" name="hidden" value="This is a hidden field" />
      <Button type="submit">send</Button>
    </form>
  );
}
