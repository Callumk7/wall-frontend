import { ActionFunctionArgs } from "@remix-run/node";
import { db } from "db";
import { posts } from "db/schema/posts";
import { desc } from "drizzle-orm";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { Button } from "~/components/ui/button";
import { FeedView } from "~/features/feed/feed-view";
import { CreatePost } from "~/features/posts/create-post";

export const loader = async () => {
  //
  const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt));

  return typedjson({ allPosts });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const body = formData.get("body")?.toString();

  const newMessage = await db.insert(posts).values({
    userId: 1,
    body,
  });

  return { newMessage };
};

export default function FeedPage() {
  const { allPosts } = useTypedLoaderData<typeof loader>();

  return (
    <>
      <div className={"m-2 grid grid-cols-9 gap-2"}>
        <div className="col-span-2 mx-5 rounded-md border border-foreground shadow-sm shadow-primary">
          <Button size={"md"} variant={"primary"}>
            New Group
          </Button>
        </div>
        <div className="col-span-6">
          <CreatePost />
          <FeedView posts={allPosts} />
        </div>
      </div>
    </>
  );
}
