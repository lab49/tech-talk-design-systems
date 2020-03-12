import React from 'react';

import './_button.scss';

interface Props {
  children: React.ReactNode;
}

const baseClass = 'button';

export const Button = ({ children }: Props) => <button className={baseClass}>{children}</button>;
