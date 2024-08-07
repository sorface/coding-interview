import { FunctionComponent } from 'react';

import './UserAvatar.css';

interface UserAvatarProps {
  src?: string;
  nickname: string;
  size?: 's' | 'm' | 'l';
}

const getSizeClassName = (size: UserAvatarProps['size']) => {
  switch (size) {
    case 'l':
      return 'w-4 h-4';
    case 'm':
      return 'w-2.5 h-2.5';
    case 's':
      return 'w-2.25 h-2.25';
    default:
      return '';
  }
};

export const UserAvatar: FunctionComponent<UserAvatarProps> = ({
  src,
  nickname,
  size,
  ...restProps
}) => {
  if (!src) {
    return (
      <div
        className={`bg-form flex items-center justify-center user-avatar ${getSizeClassName(size)}`}
        {...restProps}
      >
        {nickname[0].toLocaleUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      className={`user-avatar ${getSizeClassName(size)}`}
      alt={`${nickname} avatar`}
      {...restProps}
    />
  );
};
