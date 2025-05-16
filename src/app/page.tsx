import { CardPost } from '@/components/CardPost';

async function getAllPosts() {
  const response = await fetch('http://localhost:3042/posts');
  if (!response.ok) {
    console.error('API Error');
    return [];
  }
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main>
      {posts.map((post: any, index: number) => (
        <CardPost key={index} post={post} />
      ))}
    </main>
  );
}
