import Image from 'next/image';

type AvatarProps = {
  name: string;
  imageSrc: string;
};

export const Avatar = ({ name, imageSrc }: AvatarProps) => (
  <ul>
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
