import Image from 'next/image';
import { Avatar } from '../Avatar';
import styles from './cardpost.module.css';
import { CardPostProps } from './types';

export const CardPost = ({ post }: CardPostProps) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <Image src={post.cover} alt='postimage' width={432} height={133} />
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer className={styles.footer}>
        <Avatar name={post.author.name} imageSrc={post.author.avatar} />
      </footer>
    </article>
  );
};
