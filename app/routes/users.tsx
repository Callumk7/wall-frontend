import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "db";
import { users } from "db/schema/users";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  //
  const allUsers = await db.select().from(users);

  return json({ allUsers });
};

export default function UsersPage() {
  const { allUsers } = useLoaderData<typeof loader>();
  return (
    <div>
      {allUsers.map((user) => (
        <div key={user.id}>{user.fullName}</div>
      ))}
    </div>
  );
}
