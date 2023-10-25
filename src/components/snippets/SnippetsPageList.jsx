import Section from "../Section"
import TitleCard from "../cards/TitleCard"
import Card from "../cards/Card"

const SnippetsPageList = ({data}) => {

  let snippetsList = data?.map((snippet, index) => {

      if (index % 2 == 0) {
        return <Card snippet={snippet}/> }
      else {
         return  <Card snippet={snippet} bg="highlight" rounded border/>
      }

  })

  return (
    <Section>
      <div>
        <ul className = "grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {snippetsList}
        </ul>
      </div>
    </Section>
  )

}
export default SnippetsPageList;
