// app/page.js
import { getClient } from "../../lib/client"
import { gql } from "@apollo/client";

import Post from '../../components/posts/Post'
import SnippetsList from "@/components/snippets/SnippetsList";
import { DocumentRenderer } from "@keystone-6/document-renderer";

// Force SSR.
export const dynamic = 'force-dynamic'
export const revalidate = 5

const query = gql`query Posts {
  posts {
    title
    intro
    publishedDate
    status
    body {
      document
    }
  }
  snippets {
    title
    description
    body {
      document
    }
  }
}
`;


export default async function Page() {
  const { data } = await getClient().query({
    query
  });

  let posts = data.posts.map((post) => {
    return <Post post={post} />
  });

  let snippets = data.snippets.map((snippet) => {
    return <li>
      <h2>Title: {snippet.title} </h2>
      <p>{snippet.description}</p>
      {snippet.body && <DocumentRenderer document={snippet.body.document} />}
      </li>
  });

  return (
    <main>
      Posts from keystone
      <ul>
        {/* {posts} */}
      </ul>
      <h2> Snippets </h2>
      {snippets}
    </main>
  )
}
