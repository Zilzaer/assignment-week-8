import Link from 'next/link'

import styles from './styles.module.css'

const Header = () => {
  return (
    <header className="header">
        <div className='logo'>
             <header /> { /* img src={logo} alt="placeholder text of img desc" />  - Example of using an image for the logo */ }
        </div>
      <div className='title'>Placeholder Text For website title</div>
      <nav>
        <ul>
          <button><li><Link href="/">Home</Link></li></button>
          <button><li><Link href="/Posts">About</Link></li></button>
          <button><li><Link href="/MakePosts">Blog</Link></li></button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;