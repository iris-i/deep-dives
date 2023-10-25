import ArrowTrans from "../svgs/arrowTrans"
import Tag from "./Tag"
import Link from "next/link"

const Card = ({bg, snippet, rounded, border}) => {
  let cardStyles = 
    `py-10 px-5 md:min-h-[320px]
    ${rounded ? 'rounded-xl' : ''}
    ${bg === "highlight" ? 'bg-highlight2' : 'bg-secondary text-cream'}
    ${border ? 'border-2 border-black' : ''}`

  let arrowColor = bg === "highlight" ? "var(--ink)" : "var(--cream)"

  return (
    <div className = {cardStyles}>
      <li key={snippet.id} className ="flex flex-auto flex-col justify-between h-full">
        <Tag categories={snippet.categories}/>
          <Link href={`/snippets/${snippet.slug}`}>
            <div className="flex justify-between items-end">
              <h3 className="inline-block w-4/6 font-body">{snippet.title}</h3>
              <ArrowTrans color = {arrowColor} classes = "w-1/6"/>
            </div>
          </Link>
      </li>
    </div>
  )
}

export default Card
