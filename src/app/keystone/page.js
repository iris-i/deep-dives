// app/page.js
import { getClient } from "../../lib/client"
import { gql } from "@apollo/client";
import { DocumentRenderer, DocumentRendererProps } from "@keystone-6/document-renderer";

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
}
`;

export default async function Page() {
  const { data } = await getClient().query({ query });

  let posts = data.posts.map((post) => {
    let { title, intro, publishedDate, status, body } = post;

    return (<li>
      <h2>{title}</h2>
      <p>{intro}</p>
      <p>{publishedDate}</p>
      <p>{status}</p>
      <DocumentRenderer document={body.document} />
    </li>);
  });


  return <main>
    Posts from keystone
    <ul>
      {posts}
    </ul>
  </main>;
}
