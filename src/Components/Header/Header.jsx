import Link from "next/link";
import Image from 'next/image'
import TitlePic from './Assets/Title.png'

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div>
        <h1 className="title">Blog out the real world!</h1>
      </div>
      <nav>
        <ul className={`${styles.ul}`}>
          <li>
            <button className={`${styles.button}`}>
              <Link href="/">Home</Link>
            </button>
          </li>
          <li>
            <button className={`${styles.button}`}>
              <Link href="/Posts">About</Link>
            </button>
          </li>
          <li>
            <button className={`${styles.button}`}>
              <Link href="/MakePosts">Blogs</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
