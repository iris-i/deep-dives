import PostTeaser from "./PostTeaser"

const PostList = ({postList}) => (
  <ul className="pt-5 ml-10">
    {postList.map((post) => (
      <PostTeaser key={post.id} post={post} />
    ))}
  </ul>
)

export default PostList
