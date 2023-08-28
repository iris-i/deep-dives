// app/page.js
import { getClient } from "../../lib/client"
import { gql } from "@apollo/client";

import Post from '../../components/Post'

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

  return (
    <main>
      Posts from keystone
      <ul>
        {posts}
      </ul>
    </main>
  )
}
