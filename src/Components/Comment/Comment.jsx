import Link from 'next/link'

import styles from './styles.module.css'

const Comment = ({ author, content, timestamp }) => {
  return (
    <div className={``}>
      <h2>{ author } | { timestamp }</h2>
      <p>{ content }</p>
    </div>
  );
};

export default Comment;