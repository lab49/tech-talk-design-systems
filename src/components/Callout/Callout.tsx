import classnames from 'classnames';
import React from 'react';

import './_callout.scss';

interface Props {
  intent?: 'primary' | 'danger';
  text?: string;
  title?: string;
}

/**
 * Base CSS class.
 * @private
 */
const baseClass = 'callout';

/**
 * Card component.
 */
export const Callout = ({ title, text, intent }: Props) => {
  const cls = classnames(baseClass, {
    [`${baseClass}--intent-${intent}`]: intent,
  });

  return (
    <div className={cls}>
      {title && <p className={`${baseClass}__title`}>{title}</p>}

      {text && <p className={`${baseClass}__text`}>{text}</p>}
    </div>
  );
};
