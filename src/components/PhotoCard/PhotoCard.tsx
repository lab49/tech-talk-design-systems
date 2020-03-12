import React from 'react';

import { Button } from '../Button';
import { Image } from '../Image';

import './_photo-card.scss';

interface Props {
  hasLikeButton?: boolean;
  imgOrientation?: 'portrait';
  imgUrl: string;
  onClickLikeButton?: () => void;
  subtitle?: string;
  title?: string;
}

/**
 * Base CSS class.
 * @private
 */
const baseClass = 'photo-card';

/**
 * PhotoCard component
 */
export const PhotoCard = ({ imgOrientation, imgUrl, title, subtitle, hasLikeButton, onClickLikeButton }: Props) => {
  return (
    <div className={baseClass}>
      <Image img={imgUrl} orientation={imgOrientation} />

      {title && <p className={`${baseClass}__title`}>{title}</p>}

      {subtitle && <p className={`${baseClass}__subtitle`}>{subtitle}</p>}

      {hasLikeButton && (
        <Button size="small" intent="primary" className={`${baseClass}__like-button`} onClick={onClickLikeButton}>
          Like
        </Button>
      )}
    </div>
  );
};
