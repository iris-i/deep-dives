
import ArrowTrans from "../svgs/arrowTrans"
import Tag from "./Tag"

const Card = ({bg, snippet, rounded, border}) => {
  let cardStyles = 
    `py-10 px-5 min-h-[320px]
    ${rounded ? 'rounded-xl' : ''}
    ${bg === "highlight" ? 'bg-highlight2' : 'bg-secondary text-cream'}
    ${border ? 'border-2 border-black' : ''}`

    let arrowColor = bg === "highlight" ? "var(--primary-alt)" : "var(--cream)"

  

  return (
    <div className = {cardStyles}>
      <li key={snippet.id} className ="flex flex-auto flex-col justify-between h-full">
        <Tag categories={snippet.categories}/>
        <div className="flex justify-between items-center">
          <h3 className="inline-block w-3/4">{snippet.title}</h3>
          <ArrowTrans color = {arrowColor}/>
        </div>
      </li>
    </div>
  )
}

export default Card
