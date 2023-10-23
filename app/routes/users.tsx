import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "db";
import { users } from "db/schema/users";
import { CreateUserForm } from "~/features/users/create-user";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const fullname = formData.get("fullname")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  console.log(`${fullname}, ${email}, ${password}`);

  const newUser = await db.insert(users).values({
    fullName: fullname,
    email: email,
    password: password,
  })

  console.log(newUser[0]);

  return json(newUser);
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const allUsers = await db.select().from(users);

  return json({ allUsers });
};

export default function UsersPage() {
  const { allUsers } = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto w-4/5">
      <CreateUserForm />
      <div>
        {allUsers.map((user) => (
          <div key={user.id}>{user.fullName}</div>
        ))}
      </div>
    </div>
  );
}
