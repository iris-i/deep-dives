import Section from "../Section"
import TitleCard from "../cards/TitleCard"
import Card from "../cards/Card"

const SnippetsList = ({data}) => {

  let snippetsList = data?.map((snippet, index) => {
    
      if (index % 2 == 0) {
        return <Card snippet={snippet}/> }
      else {
         return  <Card snippet={snippet} bg="highlight" rounded border/>
      }
    
  })

  return (
    <Section>
      <div className = "flex">
        <div className = "w-1/4">
          <TitleCard 
            title={"Today I learnt"}
            intro={"Daily snippets of aha moments"} 
            url={"/til"}
            linkText={"Read all TIL posts."}
          />
          </div>
      <ul className = "grid grid-cols-3 gap-4">
        {snippetsList}
      </ul>
      </div>
    </Section>
  )

}
export default SnippetsList;
