import Link from "next/link";

const PostTeaser = ({ post }) => {
  const { title, body, slug } = post;
  return (
    <li className=" list-disc">
      <Link href={`/posts/${slug}`}><h3 className="inline">{title}</h3></Link>
    </li>
  )
}

export default PostTeaser
