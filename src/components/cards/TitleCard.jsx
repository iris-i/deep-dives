import Link from "next/link"
import ArrowSvg from "../svgs/arrow"

const TitleCard = ({title, intro, url, linkText}) => {

  return (
    <div className = " flex flex-col justify-between bg-primary py-10 px-5 text-cream rounded-lg md:min-h-[320px] border-2 border-black">
      <div>
        <h2 className = "text-4xl">{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
        <Link href={url} className = "flex justify-between">
          <p className="text-xl">{linkText}</p>
          <ArrowSvg color = "var(--cream)"/>
        </Link>
      </div>
  )
}

export default TitleCard
