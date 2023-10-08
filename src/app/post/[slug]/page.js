import { getClient } from "../../../lib/client"
import { gql } from "@apollo/client";

// Component imports
import PostPage from "@/components/posts/PostPage";

export async function generateStaticParams() {
  const { data } = await getClient().query({ query });

  return data.posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))
}

export default async function Page({params}) {
  const { data } = await getClient().query({ 
    query: postQuery,
    variables: {
      slug: params.slug
    }
   });
 console.log("Post", data );

  let{ post } = data;

  return(
    <main>
      <PostPage post={post} />
    </main>
  )
}

// GraphQL queries for this page.
const query = gql` query Posts {
  posts {
    slug
  }
}
`

const postQuery = gql` query Post($slug: String!) {
  post(where: { slug: $slug }) {
    title
    intro
    publishedDate
    status
    slug
    id
    body {
      document
    }
    learningJourneys {
      name
    }
    categories {
      name
      posts {
        title
      }
    }
  }
}`
