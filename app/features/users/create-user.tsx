import { Input } from "~/components/ui/text-area";

export function CreateUserForm() {
  return (
    <form action="POST" method="/users">
      <Input label="full name" name="fullname" />
      <Input label="email" name="email"/>
      <Input label="password" type="password" name="password" />
    </form>
  )
}
