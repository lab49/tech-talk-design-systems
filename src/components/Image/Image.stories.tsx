import { withKnobs, text, select } from '@storybook/addon-knobs';
import React from 'react';

import { Image } from './Image';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Base Components | Image',
  decorators: [withKnobs],
};

export const Default = () => {
  const img = text('Image URL', 'https://source.unsplash.com/WLUHO9A_xik/1600x900');
  const orientation = select(
    'Orientation',
    {
      'Landscape (default)': undefined,
      Portrait: 'portrait',
    },
    undefined,
  );

  return (
    <div style={{ width: 400 }}>
      <Image img={img} orientation={orientation} />
    </div>
  );
};
