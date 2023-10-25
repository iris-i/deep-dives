import Image from 'next/image'
import { getClient } from "../lib/client"
import { gql } from "@apollo/client";

import Hero from '@/components/hero/Hero'
import SnippetsList from '@/components/snippets/SnippetsList'
import LearningJourneys from '@/components/journeys/LearningJourneys'

// Force SSR.
export const dynamic = 'force-dynamic'
export const revalidate = 5

const query = gql`query Posts {
  posts {
    title
    intro
    publishedDate
    status
    id
  }
  snippets(take: 3) {
    title
    slug
    description
    categories {
      name
    }
  }
  learningJourneys {
    categories {
      name
      id
    }
    description {
      document
    }
    id
    name
    posts{
      title
      id
      slug
    }
  }
}
`;

export default async function Home() {
  const { data } = await getClient().query({ query });

  return (
    <main>
      <Hero
        large
        title="Deep Dives and Quick Bytes"
        subtitle="This developer's tales of rabbit holes and aha moments"
        description="The beauty of continuous learning is that there is always room for improvement. These posts reflect my understanding on any given day and yes, future me will definitely roll her eyes at my past code."
      />
      <SnippetsList data={data.snippets} />
      <div className="mx-0 mt-10 border bg-secondary dark:bg-cream">
        <h2 className="text-8xl text-white dark:text-secondary mx-auto text-center p-8 -mb-16">Learning Journeys</h2>
      </div>
      <LearningJourneys data={data.learningJourneys} />
    </main>
  )
}
