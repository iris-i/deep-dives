// Site-wide Header
import Link from "next/link"
import Image from 'next/image';
import styles from './Header.module.css'

import IrisLogo from "../svgs/irisi";

const Header = () => {
  const { header, title, navigation, inner, highlight } = styles;

  return (
    <header className={header}>
      <div className={inner}>

        <nav>
          <ul className={navigation}>
            <li><Link href="/posts">All Articles</Link></li>
            <li>
            <Link href="/">
                <IrisLogo />
              </Link>
            </li>
            <li><Link href="/snippets">
              <span className={highlight}>T</span>
              oday .
              <span className={highlight}> I</span> .
              <span className={highlight}> L</span>earnt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
