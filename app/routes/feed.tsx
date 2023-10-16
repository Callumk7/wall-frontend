import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import { db } from "db";
import { posts } from "db/schema/posts";
import { desc } from "drizzle-orm";
import { useState } from "react";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { FeedView } from "~/features/feed/feed-view";
import { CreatePost } from "~/features/posts/create-post";

export const loader = async ({ request }: LoaderFunctionArgs) => {
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
  const [isPostSelected, setIsPostSelected] = useState<boolean>(false);

  const { allPosts } = useTypedLoaderData<typeof loader>();

  return (
    <>
      <button
        onClick={() => setIsPostSelected(!isPostSelected)}
        className="bg-primary p-2 text-background"
      >
        select a post
      </button>
      <div className={clsx("m-2 grid grid-cols-9 gap-2", isPostSelected ? "hidden" : "")}>
        <div className="col-span-2 mx-5 rounded-md border border-foreground shadow-sm shadow-primary">
          Groups
        </div>
        <div className="col-span-6">
          <CreatePost />
          <FeedView posts={allPosts} />
        </div>
      </div>
    </>
  );
}
