import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import { Button } from './Button';

export default {
  title: 'Base Components/Button',
  decorators: [withKnobs],
};

export const withText = () => {
  const buttonText = text('Text', 'Hello world!');

  return (
    <Button>{buttonText}</Button>
  );
};

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
