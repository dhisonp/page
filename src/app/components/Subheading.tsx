import React, { FC } from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Subheading: FC<Props> = ({ children, className = '' }) => {
  return (
    <div
      className={`text-base text-zinc-600 dark:text-zinc-400 self-start ${className}`}
    >
      {children}
    </div>
  );
};

export default Subheading;
