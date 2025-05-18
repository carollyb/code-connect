import { CardPost } from '@/components/CardPost';
import { logger } from '@/logger';
import { remark } from 'remark';
import html from 'remark-html';
import styles from './page.module.css';

async function getPostBySlug(slug: string) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
    logger.error('Error: API Call - get post by slug');
    return [];
  }
  logger.info('Success: API Call - get post by slug');
  const data = await response.json();
  if (data.length === 0) return {};
  const post = data[0];
  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();
  post.markdown = contentHtml;
  return post;
}

export default async function PagePost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
}
