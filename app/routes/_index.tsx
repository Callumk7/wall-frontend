import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "db";
import { users } from "db/schema/users";

export const meta: MetaFunction = () => {
  return [{ title: "The Wall" }, { name: "description", content: "This is Your Wall" }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  //
  const allUsers = await db.select().from(users);
  return json({ allUsers });
};

export default function Index() {
  const { allUsers } = useLoaderData<typeof loader>();
  return (
    <>
      <div className="m-4 w-full bg-primary p-10 text-center">
        <h1 className="text-4xl">Hello, Deployment</h1>
        {allUsers.map((user) => (
          <div key={user.id}>{user.fullName}</div>
        ))}
      </div>
      <div className="m-4 w-full bg-lime-200 p-10 text-center">
        <h1 className="text-4xl">Hello, Deployment, AGAIN</h1>
      </div>
    </>
  );
}
