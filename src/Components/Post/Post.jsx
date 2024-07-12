import Link from 'next/link'

import styles from './styles.module.css'

const Post = ({ title, author, content, timestamp }) => {
  return (
    <div className={``}>
      <h1>{ title }</h1>
      <h2>{ author } | { timestamp }</h2>
      <p>{ content }</p>
    </div>
  );
};

export default Post;