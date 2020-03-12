import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import React from 'react';

import { Button } from './Button';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Base Components|Button',
  decorators: [withKnobs],
};

export const Default = () => {
  const buttonText = text('Text', 'Hello world!');
  const block = boolean('Block', false);
  const size = select(
    'Size',
    {
      Small: 'small',
      'Medium (default)': undefined,
      Large: 'large',
    },
    undefined,
  );
  const intent = select(
    'Intent',
    {
      None: undefined,
      Primary: 'primary',
      Danger: 'danger',
    },
    undefined,
  );

  return (
    <Button intent={intent} size={size} block={block}>
      {buttonText}
    </Button>
  );
};
