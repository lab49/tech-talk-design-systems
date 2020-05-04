import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import React from 'react';

import { PhotoCard } from './PhotoCard';

export default {
  title: 'Composed Components | PhotoCard',
  decorators: [withKnobs],
};

export const Default = () => {
  const onClickLikeButton = action('onClickLikeButton');
  const img = text('Photo URL', 'https://source.unsplash.com/2BJ4la6xgRw');
  const hasLikeButton = boolean('Show like button?', false);
  const title = text('Title', 'A Taste of NYC');
  const subtitle = text(
    'Subtitle',
    'Almost 40% of New York residents were born in another country, which makes this city of some 25,000 restaurants an unparalleled place to eat your way around the globe.',
  );
  const imgOrientation = select(
    'Image orientation',
    {
      'Landscape (default)': undefined,
      Portrait: 'portrait',
    },
    undefined,
  );

  return (
    <div style={{ width: 400 }}>
      <PhotoCard
        hasLikeButton={hasLikeButton}
        imgOrientation={imgOrientation}
        imgUrl={img}
        onClickLikeButton={onClickLikeButton}
        subtitle={subtitle}
        title={title}
      />
    </div>
  );
};
