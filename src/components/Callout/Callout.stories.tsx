import React from 'react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import { Callout } from './Callout';

// eslint-disable-next-line import/no-default-export
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
