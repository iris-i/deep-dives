// Site-wide Header
import Link from "next/link"
import styles from './Header.module.css'

const Header = () => {
  const { header, title, navigation, inner, highlight } = styles;

  return (
    <header className={header}>
      <div className={inner}>
        <h1 className={title}>Deep Dives</h1>
        <nav>
          <ul className={navigation}>
            <li><Link href="/">Learning Journeys</Link></li>
            <li><Link href="/snippets">
              <span className={highlight}>T</span>
              oday.
              <span className={highlight}>I</span>.
              <span className={highlight}>L</span>earnt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
