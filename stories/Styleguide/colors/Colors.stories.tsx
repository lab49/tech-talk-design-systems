import React from 'react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

// import { Button } from './Button';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Style guide|Colors',
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <div>
      colors
    </div>
  );
};
