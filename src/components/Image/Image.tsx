import classnames from 'classnames';
import React from 'react';

import './_image.scss';

interface Props {
  img: string;
  orientation?: 'portrait';
}

/**
 * Base CSS class.
 * @private
 */
const baseClass = 'image';

/**
 * Image component.
 */
export const Image = ({ img, orientation }: Props) => {
  const cls = classnames(baseClass, {
    [`${baseClass}--orientation-${orientation}`]: orientation,
  });

  return (
    <div className={cls}>
      <div className={`${baseClass}__wrapper`}>
        <div className={`${baseClass}__inner-wrapper`}>
          <img className={`${baseClass}__img`} src={img} alt="storybook" />
        </div>
      </div>
    </div>
  );
}
