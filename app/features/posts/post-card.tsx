import { Post } from "db/schema/posts";

interface PostCardProps {
  post: Post;
}
export function PostCard({ post }: PostCardProps) {
  return (
    <div className="border border-foreground p-4 rounded-md">
      <h1>{post.userId}</h1>
      <h1>{post.body}</h1>
    </div>
  );
}
