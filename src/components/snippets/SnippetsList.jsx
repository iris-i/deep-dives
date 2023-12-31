import Section from "../Section"
import TitleCard from "../cards/TitleCard"
import Card from "../cards/Card"

const SnippetsList = ({data}) => {

  let snippetsList = data?.map((snippet, index) => {
    
      if (index % 2 == 0) {
        return <Card key={snippet.id} snippet={snippet}/> }
      else {
         return  <Card key={snippet.id} snippet={snippet} bg="highlight" rounded border/>
      }
    
  })

  return (
    <Section>
      <div className = "md:flex">
        <div className = "basis-1/6">
          <TitleCard 
            title={"Today I learnt"}
            intro={"Daily snippets of aha moments"} 
            url={"/snippets"}
            linkText={"Read all TIL posts."}
          />
        </div>
      <ul className = " grid sm:grid-cols-2 md:grid-cols-3 gap-4 basis-5/6">
        {snippetsList}
      </ul>
      </div>
    </Section>
  )

}
export default SnippetsList;
