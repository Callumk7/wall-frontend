import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";

export default function FeedPage() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="mx-auto flex w-4/5 flex-col gap-5 p-10">
      <h1>This is the feed page</h1>
      <Links />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add one</button>
      <Outlet />
    </div>
  );
}

const Links = () => {
  return (
    <nav className="flex flex-row gap-2">
      <Link to={"/feed"} className="rounded-sm bg-red-500 p-2">
        FEED
      </Link>
      <Link to={"/feed/post"} className="rounded-sm bg-blue-500 p-2">
        FEED.POST
      </Link>
    </nav>
  );
};
