import { CardPost } from '@/components/CardPost';
import { logger } from '@/logger';
import Link from 'next/link';
import styles from './page.module.css';

async function getAllPosts(page: number) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  );
  if (!response.ok) {
    logger.error('Error: API Call - get all posts');
    return [];
  }
  logger.info('Success: API Call - get all posts');
  return response.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <main className='grid'>
      {posts.map((post: any, index: number) => (
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          <CardPost key={index} post={post} />
        </Link>
      ))}
      {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
      {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
    </main>
  );
}
