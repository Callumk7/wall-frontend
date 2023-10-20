import { CreateGroup } from "~/features/groups/create-group";

export default function GroupsPage() {
  return (
    <div className="mx-auto w-4/5">
      <h1>This is the group page</h1>
      <CreateGroup />
    </div>
  );
}
