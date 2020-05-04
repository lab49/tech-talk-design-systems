import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';

import { IntroCard } from './IntroCard';

export default {
  title: 'Composed Components | IntroCard',
  decorators: [withKnobs],
};

export const Default = () => {
  const onClickLikeButton = action('onClickLikeButton');
  const img = text('Photo URL', 'https://source.unsplash.com/-T-1Z3mLHuA');
  const title = text('Title', 'Beach Getaway');

  return (
    <div style={{ width: 300 }}>
      <IntroCard imgUrl={img} onClickLikeButton={onClickLikeButton} title={title} />
    </div>
  );
};
