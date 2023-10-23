import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/forms";

export function CreateUserForm() {
  return (
    <form method="POST" className="w-96 flex flex-col gap-y-2">
      <Input label="full name" name="fullname" />
      <Input label="email" name="email"/>
      <Input label="password" type="password" name="password" />
      <Button type="submit">Submit</Button>
    </form>
  )
}
