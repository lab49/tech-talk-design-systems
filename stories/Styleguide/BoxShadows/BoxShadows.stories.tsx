import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import './_box-shadows.scss';

/**
 * Base CSS class.
 * @private
 */
const baseClass = 'styleguide-box-shadows';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Style guide|Box Shadows',
  decorators: [withKnobs],
};

/**
 * List of available box shadows.
 * @private
 */
const boxShadows = [
  { variable: 'van-gogh', name: 'Van Gogh' },
  { variable: 'monet', name: 'Monet' },
  { variable: 'picasso', name: 'Picasso' },
  { variable: 'da-vinci', name: 'Da Vinci' },
];

/**
 * Default story component.
 */
export const Default = () => {
  return (
    <div className={baseClass}>
      {boxShadows.map(({ variable, name }) => (
        <div key={variable} className={`${baseClass}__box-shadow ${baseClass}__box-shadow--${variable}`}>
          <p className={`${baseClass}__box-shadow-name`}>{name}</p>

          <p className={`${baseClass}__box-shadow-variable`}>map-get($colors, {variable})</p>
        </div>
      ))}
    </div>
  );
};
