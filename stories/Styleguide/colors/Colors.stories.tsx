import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import './_colors.scss';

const baseClass = 'styleguide-colors';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Style guide|Colors',
  decorators: [withKnobs],
};

const colors = [
  { variable: 'sun', name: 'Sun', code: '#aaa' },
  { variable: 'mercury', name: 'Mercury', code: '#2684db' },
  { variable: 'venus', name: 'Venus', code: '#fff' },
  { variable: 'earth', name: 'Earth', code: '#f0f0f0' },
  { variable: 'mars', name: 'Mars', code: '#e65036' },
  { variable: 'jupiter', name: 'Jupiter', code: '#c9c9c9' },
];

export const Default = () => {
  return (
    <div className={baseClass}>
      {colors.map(({ variable, name, code }) => (
        <div className={`${baseClass}__color ${baseClass}__color--${variable}`}>
          <p className={`${baseClass}__color-code`}>{code}</p>

          <p className={`${baseClass}__color-name`}>{name}</p>

          <p className={`${baseClass}__color-variable`}>map-get($colors, {variable})</p>
        </div>
      ))}
    </div>
  );
};
