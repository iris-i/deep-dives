"use client"
import { useEffect } from "react";
import { DocumentRenderer,  DocumentRendererProps } from "@keystone-6/document-renderer";
import Prism from "prismjs";
import "../../css/syntax-highlighter/prism.css"
import "../../css/syntax-highlighter/prism-overrides.css"

import { formatDate } from "@/lib/utils/utils";
import Hero from '../hero/Hero.jsx';

const PostPage = ({post}) => {
  let{ title, body, intro, publishedDate, status, id } = post;

  publishedDate = new Date(publishedDate);
  let date = formatDate(publishedDate);

// Change the code block markup from <pre> to <code>

  const renderers = {
    inline: {
      code: ({ children }) => {
        return <code className="language-js language-php language-twig">{children}</code>;
      },
    },
    block: {
      code: ({ children }) => {
        return <pre><code className="language-js language-php language-twig">{children}</code></pre>;
      },
    },
  };

  useEffect(() => {
    Prism.manual = true;
    Prism.highlightAll(); // <--- prepare Prism 
  }, [post]);

  return (
    <>
    <Hero title={title} description={intro} />
    <div className="container mx-auto max-w-screen-lg py-20 prose prose-lg dark:prose-invert">
      <div className="">
        {publishedDate && <p>{date}</p>}
        {body && <DocumentRenderer document={body.document} renderers={renderers} />}
      </div>
    </div>
    </>
  );
};

export default PostPage;
