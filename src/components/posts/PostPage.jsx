"use client"

import { DocumentRenderer } from "@keystone-6/document-renderer";
import Hero from '../hero/Hero.jsx';

const PostPage = ({post}) => {
  let{ title, body, intro, publishedDate, status, id } = post;

  return (
    <>
    <Hero title={title} description={intro} />
    <div className="container mx-auto">
      <div className="prose prose-lg">
        {body && <DocumentRenderer document={body.document} />}
      </div>
    </div>
    </>
  );
};

export default PostPage;
