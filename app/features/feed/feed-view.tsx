import { Post } from "db/schema/posts";
import { PostCard } from "../posts/post-card";

interface FeedViewProps {
  posts: Post[];
}


export function FeedView({posts}: FeedViewProps) {
  //
  return (
    <div className="flex flex-col gap-2">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
