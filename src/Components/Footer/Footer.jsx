import Link from 'next/link'

import styles from './styles.module.css'

const Footer = () => {
    return (
      <footer className={``}>
        <div className='title'>Placeholder Text For website title</div>
        <nav>
          <ul>
            <button><li><Link href="/githublink">Placeholder replace with github logo</Link></li></button>
            <button><li><Link href="/linkedinlink">Placeholder replace with linkedin Logo</Link></li></button>
            <button><li><Link href="/thirdlink">placeholder replace with third logo</Link></li></button>
          </ul>
        </nav>
      </footer>
    );
  };
  
  export default Footer;