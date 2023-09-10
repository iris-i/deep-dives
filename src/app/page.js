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
  snippets(take: 3) {
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
      <div className="mx-0 my-10 border bg-secondary">
        <h2 className="text-8xl text-white mx-auto text-center p-8 -mb-16">Learning Journeys</h2>
      </div>
    </main>
  )
}
