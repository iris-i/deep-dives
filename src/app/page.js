import Image from 'next/image'
import { getClient } from "../lib/client"
import { gql } from "@apollo/client";

import Hero from '@/components/hero/Hero'
import SnippetsList from '@/components/snippets/SnippetsList'

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
    categories {
      name
    }
  }
}
`;

export default async function Home() {
  const { data } = await getClient().query({ query });

  return (
    <main>
      <Hero />
      <SnippetsList data={data.snippets} />
    </main>
  )
}
