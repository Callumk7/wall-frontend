import { Link } from "@remix-run/react";
import { useState } from "react";

export default function PostPage() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="mx-auto flex w-4/5 flex-col gap-5 p-10">
      <h1>This is the post that we were talking about</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add one</button>
    </div>
  );
}
