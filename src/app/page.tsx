import { CardPost } from '@/components/CardPost';
import { logger } from '@/logger';

async function getAllPosts() {
  const response = await fetch('http://localhost:3042/posts');
  if (!response.ok) {
    logger.error('Error: API Call - get all posts');
    return [];
  }
  logger.info('Success: API Call - get all posts');
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className='grid'>
      {posts.map((post: any, index: number) => (
        <CardPost key={index} post={post} />
      ))}
    </main>
  );
}
