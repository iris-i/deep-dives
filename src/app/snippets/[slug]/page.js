import { getClient } from "../../../lib/client"
import { gql } from "@apollo/client";

// Component imports
import SnippetPage from "@/components/snippets/SnippetPage";

// GraphQL queries for this page.
const query = gql` query Snippets {
  snippets {
    slug
  }
}
`

export async function generateStaticParams() {
  const { data } = await getClient().query({ query });

  return data.snippets.map((snippet) => ({
    params: {
      slug: snippet.slug,
    },
  }))
}


const snippetsQuery = gql` query Snippet($slug: String!) {
  snippet(where: { slug: $slug }) {
    id
    title
    slug
    description
    body {
      document
    }
    categories {
      id
      name
    }
  }
}`

export default async function Page({params}) {
  const { data } = await getClient().query({ 
    query: snippetsQuery,
    variables: {
      slug: params.slug
    }
   });

  let{ snippet } = data;

  return(
    <main>
      <SnippetPage snippet={snippet} />
    </main>
  )
}


