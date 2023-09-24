import { DocumentRenderer } from "@keystone-6/document-renderer";

import Section from "../Section"
import CategoriesList from "./CategoriesList";
import LearningJourneyPosts from "./LearningJourneyPosts";

const LearningJourneys = ({data}) => {

  let journeyList = data.map((journey) => {
    let{categories, id, posts, description, name} = journey
    return (
      <div key={id} className="border-solid border-b-2 dark:border-background_body odd:bg-secondary dark:even:bg-secondary odd:text-[#DEE5E5] group">
          <LearningJourneyPosts posts={posts} description={description} name = {name} />
        <ul className="col-span-2 border-t-2 dark:border-background_body">
            <CategoriesList categories={categories} />
        </ul>
      </div>
    )
  })

  return (
    <>

        {journeyList}

    </>
  )
}

export default LearningJourneys
