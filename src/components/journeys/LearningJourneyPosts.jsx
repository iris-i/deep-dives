import { DocumentRenderer } from "@keystone-6/document-renderer";

import Section from "../Section"
import PostList from "../posts/PostList";

const LearningJourneyPosts = ({posts, description, name}) => {

  return(
    <div className="grid md:grid-cols-2 max-w-screen-xl mx-auto items-stretch">
      <h2 className = "border-r-2 dark:border-background_body flex flex-col justify-center text-3xl font-body my-0">{name}</h2>
      <div className="p-10 md:p-20">
        <DocumentRenderer document={description.document}/>
        <PostList postList={posts}/>
      </div>
    </div>
  )
}

export default LearningJourneyPosts;
