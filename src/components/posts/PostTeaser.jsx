import Link from "next/link";

const PostTeaser = ({ post }) => {
  const { title, body, slug } = post;
  return (
    <li className=" list-disc">
      <Link href={`/post/${slug}`}><h3>{title}</h3></Link>
    </li>
  )
}

export default PostTeaser
