import Image from 'next/image';
import styles from './aside.module.css';

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image
        src={'/logo.png'}
        alt='Logo da Code Connect'
        width={128}
        height={40}
      />
    </aside>
  );
};
