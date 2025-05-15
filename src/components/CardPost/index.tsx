import Image from 'next/image';
import { Avatar } from '../Avatar';

type CardPostProps = {
  post: {
    id: number;
    cover: string;
    title: string;
    slug: string;
    body: string;
    markdown: string;
    author: {
      id: number;
      name: string;
      username: string;
      avatar: string;
    };
  };
};

export const CardPost = ({ post }: CardPostProps) => {
  return (
    <article>
      <header>
        <Image src={post.cover} alt='postimage' width={432} height={133} />
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar name={post.author.name} imageSrc={post.author.avatar} />
      </footer>
    </article>
  );
};
