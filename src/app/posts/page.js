// app/page.js
import { getClient } from "../../lib/client"
import { gql } from "@apollo/client";

import SnippetsList from "@/components/snippets/SnippetsList";
import Section from "@/components/Section";
import ArticleCard from "@/components/cards/ArticleCard";

// Force SSR.
export const dynamic = 'force-dynamic'
export const revalidate = 5

const query = gql`query Posts {
  posts {
    id
    title
    intro
    publishedDate
    status
    categories {
      name
    }

  }
  snippets {
    id
    title
    description
    publishedDate
    categories {
      name
    }
  }
}
`;

export default async function Page() {
  const { data } = await getClient().query({
    query
  });

  // Combine and sort the posts and snippets by publishedDate, while adding a type attribute
  const allArticles = [
    ...data.posts.map(post => ({ ...post, type: 'Post' })), 
    ...data.snippets.map(snippet => ({ ...snippet, type: 'TIL' }))
  ];

  allArticles.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

  // Map combined array to React components based on type
  const articlesComponents = allArticles.map(article => {
      return (
        <ArticleCard key={article.id} article={article} />
      );
  });

  return (
    <main>
      <Section>
        <div className="bg-[#d7df23] dark:bg-black p-10 border dark:border-black">
          <h1 className = "px-4 pb-20">All articles</h1>
          <ul className = "grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {articlesComponents}
          </ul>
        </div>
      </Section>
    </main>
  )
}





// import useDarkMode from 'path-to-your-hooks/useDarkMode';

// export default function DarkModeToggle() {
//   const [isDarkMode, toggleDarkMode] = useDarkMode();

//   return (
//     <div>
//       <label className="flex items-center cursor-pointer">
//         <div className="relative">
//           <input 
//             type="checkbox" 
//             className="sr-only" 
//             checked={isDarkMode}
//             onChange={toggleDarkMode}
//           />
//           <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
//           <div className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform ${isDarkMode ? 'translate-x-full' : ''}`}></div>
//         </div>
//         <div className="ml-3 text-xl">
//           {isDarkMode ? 'Dark' : 'Light'} Mode
//         </div>
//       </label>
//     </div>
//   );
// }
