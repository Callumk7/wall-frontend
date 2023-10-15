interface FeedViewProps {
  posts: Post[];
}

interface Post {
  id: string;
  user: string;
  body: string;
  date: Date;
  comments: Post[];
}

export function FeedView({posts}: FeedViewProps) {
  //
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.user}</h2>
          <p>{post.body}</p>
          <div>
            {post.comments.map(comment => (
              <div key={comment.id}>
                <h2>{comment.user}</h2>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
