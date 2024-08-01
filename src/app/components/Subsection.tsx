import React, { FC } from 'react';
import Subheading from './Subheading';

interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: any;
  header: string;
  emoji?: string;
}

const Subsection: FC<Props> = ({ children, className = '', header, emoji, style }) => {
  return (
    <div className={`${className}`} style={style}>
      <Subheading className="mb-4">
        {emoji && emoji?.length > 0 && <a className="mr-2">{emoji} </a>}
        {header}
      </Subheading>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default Subsection;
