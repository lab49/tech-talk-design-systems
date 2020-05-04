import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';

import './_typography.scss';

/**
 * Base CSS class.
 * @private
 */
const baseClass = 'styleguide-typography';

export default {
  title: 'Style guide|Typography',
  decorators: [withKnobs],
};

/**
 * Default story component.
 */
export const Default = () => {
  const atlantaText = text('Atlanta', 'All their equipment and instruments are alive.');
  const chicagoText = text('Chicago', 'A red flare silhouetted the jagged edge of a wing.');
  const newYorkText = text('New York', 'I watched the storm, so beautiful yet terrific.');
  const sanFranciscoText = text('San Francisco', 'Almost before we knew it, we had left the ground.');

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__type-style`}>
        <header className={`${baseClass}__type-style-header`}>
          <div className={`${baseClass}__type-style-name`}>Atlanta</div>

          <div className={`${baseClass}__type-style-code`}>@include type-style-atlanta;</div>
        </header>

        <div className={`${baseClass}__type-style-example ${baseClass}__type-style-example--atlanta`}>
          {atlantaText}
        </div>
      </div>

      <div className={`${baseClass}__type-style`}>
        <header className={`${baseClass}__type-style-header`}>
          <div className={`${baseClass}__type-style-name`}>Chicago</div>

          <div className={`${baseClass}__type-style-code`}>@include type-style-chicago;</div>
        </header>

        <div className={`${baseClass}__type-style-example ${baseClass}__type-style-example--chicago`}>
          {chicagoText}
        </div>
      </div>

      <div className={`${baseClass}__type-style`}>
        <header className={`${baseClass}__type-style-header`}>
          <div className={`${baseClass}__type-style-name`}>New York</div>

          <div className={`${baseClass}__type-style-code`}>@include type-style-new-york;</div>
        </header>

        <div className={`${baseClass}__type-style-example ${baseClass}__type-style-example--new-york`}>
          {newYorkText}
        </div>
      </div>

      <div className={`${baseClass}__type-style`}>
        <header className={`${baseClass}__type-style-header`}>
          <div className={`${baseClass}__type-style-name`}>San Francisco</div>

          <div className={`${baseClass}__type-style-code`}>@include type-style-san-francisco;</div>
        </header>

        <div className={`${baseClass}__type-style-example ${baseClass}__type-style-example--san-francisco`}>
          {sanFranciscoText}
        </div>
      </div>
    </div>
  );
};
