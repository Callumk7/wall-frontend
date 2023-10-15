import { ActionFunctionArgs } from "@remix-run/node";
import { FeedView } from "~/features/feed/feed-view";
import { CreatePost } from "~/features/posts/create-post";

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData();
  console.log(formData.get("body"))
  console.log(formData.get("hidden"))

  return null;
}

export default function FeedPage() {
  const posts = [
    {
      id: "1",
      user: "Alice",
      body: "Hello, World!",
      date: new Date("2023-10-10"),
      comments: [
        {
          id: "2",
          user: "Bob",
          body: "Hi, Alice!",
          date: new Date("2023-10-11"),
          comments: [],
        },
        {
          id: "3",
          user: "Charlie",
          body: "Good morning, Alice!",
          date: new Date("2023-10-11"),
          comments: [
            {
              id: "4",
              user: "Alice",
              body: "Good morning, Charlie!",
              date: new Date("2023-10-12"),
              comments: [],
            },
          ],
        },
      ],
    },
    {
      id: "5",
      user: "Charlie",
      body: "It's a nice day.",
      date: new Date("2023-10-11"),
      comments: [
        {
          id: "6",
          user: "Bob",
          body: "Indeed, it is!",
          date: new Date("2023-10-12"),
          comments: [],
        },
      ],
    },
  ];

  return (
    <div className="m-2 grid grid-cols-9 gap-2">
      <div className="col-span-2 bg-red-400">Groups</div>
      <div className="col-span-6 bg-blue-400">
        <CreatePost />
        <FeedView posts={posts} />
      </div>
      <div className="bg-orange-400">div</div>
    </div>
  );
}
