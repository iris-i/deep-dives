import { formatDate } from "@/lib/utils/utils";

// Import components
import Tags from "../categories/Tags";
import Link from "next/link";

const ArticleCard = ({article}) => { 

  let {title, publishedDate, type, categories, slug} = article;

  publishedDate = new Date(publishedDate);
  let date = formatDate(publishedDate);

  // Create the slug url
  let slugUrl = type === "Post" ? `/post/${slug}` : `/snippet/${slug}`;

  return (
    <li className = "border-t py-4">
      {publishedDate && <span>{date}</span>}
      <Link href = {slugUrl}><h2>{title}</h2></Link>
      <p>{type} | <Tags categories={categories}/> </p>
    </li>
)
  }

export default ArticleCard
