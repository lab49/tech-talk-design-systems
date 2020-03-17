import React from 'react';

import { Button } from '../Button';
import { Image } from '../Image';

import './_intro-card.scss';

interface Props {
  imgUrl: string;
  onClickLikeButton?: () => void;
  title?: string;
}

/**
 * Base CSS class.
 * @private
 */
const baseClass = 'intro-card';

/**
 * PhotoCard component
 */
export const IntroCard = ({ imgUrl, title, onClickLikeButton }: Props) => {
  return (
    <div className={baseClass}>
      <Image img={imgUrl} orientation="portrait" />

      <div className={`${baseClass}__content`}>
        {title && <p className={`${baseClass}__title`}>{title}</p>}

        <Button size="small" intent="primary" className={`${baseClass}__like-button`} onClick={onClickLikeButton}>
          Let&apos;s go!
        </Button>
      </div>
    </div>
  );
};
