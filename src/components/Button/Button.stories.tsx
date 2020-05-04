import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import React from 'react';

// Here's our Button component. The Button itself has no knowledge
// of Storybook, and this is the actual Button component you would
// use in your project.
import { Button } from './Button';

// This is our story object. It configures information about the Story.
//
// You can add decorators to your stories to add additional functionality.
// There are many decorators available from the community, but you can easily
// create your own to suit your needs.
export default {
  title: 'Base Components|Button',
  decorators: [withKnobs],
};

// This is a single story.
//
// Since stories are functions that return React components,
// you can do anything in here that you could do in any React component.
// If you wanted to, you could wrap your components in other components
// to hold on to state, mock out providers like Redux or themes,
// and add custom content to your story.
export const Default = () => {
  // Here's an example of using a knob, one of the official Storybook plugins.
  const buttonText = text('Text', "Hello world, I'm a button!");
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

  // And here's our Button component. As mentioned above, this is just
  // a React component, so you could wrap the Button however you need to
  // correctly display the content you want to present.
  return (
    <Button intent={intent} size={size} block={block}>
      {buttonText}
    </Button>
  );
};

// Extra story options.
Default.story = {
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
