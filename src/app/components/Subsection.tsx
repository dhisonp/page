import { Subheading } from './Subheading';

interface SubsectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  header: string;
}

export function Subsection({ children, className = '', header, style }: SubsectionProps) {
  return (
    <div className={`gap-y-4 ${className}`} style={style}>
      <Subheading className="mb-4">{header}</Subheading>
      {children}
    </div>
  );
}
