import Image from 'next/image';
import styles from './avatar.module.css';

type AvatarProps = {
  name: string;
  imageSrc: string;
};

export const Avatar = ({ name, imageSrc }: AvatarProps) => (
  <ul className={styles.avatar}>
    <li>
      <Image
        src={imageSrc}
        alt={`avatar do(a) ${name}`}
        width={32}
        height={32}
      />
    </li>
    <li>@{name}</li>
  </ul>
);
