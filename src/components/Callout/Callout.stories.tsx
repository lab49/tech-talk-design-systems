import { withKnobs, text, select } from '@storybook/addon-knobs';
import React from 'react';

import { Callout } from './Callout';

export default {
  title: 'Base Components | Callout',
  decorators: [withKnobs],
};

export const Default = () => {
  const title = text('Title', 'Callout title');
  const textText = text(
    'Text',
    'A shining crescent far beneath the flying vessel. It was going to be a lonely trip back.',
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

  return <Callout title={title} text={textText} intent={intent} />;
};
