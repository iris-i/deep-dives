import Image from 'next/image'
import { getClient } from "../../lib/client"
import { gql } from "@apollo/client";

import Hero from '@/components/hero/Hero'
import SnippetsPageList from '@/components/snippets/SnippetsPageList'

// Force SSR.
export const dynamic = 'force-dynamic'
export const revalidate = 5

const query = gql`query Snippets {
  snippets {
    title
    id
    slug
    description
    categories {
      name
    }
    body {
      document
    }
  }
}
`;

export default async function SnippetPage() {
  const { data } = await getClient().query({ query });

  return (
    <main>
      <Hero
        title="Today I learnt"
        subtitle="Daily snippets of a-ha moments"
      />
      <SnippetsPageList data={data.snippets} />
    </main>
  )
}
