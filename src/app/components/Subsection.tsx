import { Subheading } from './Subheading';

interface SubsectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  header: string;
  emoji: string;
}

export function Subsection({ children, className = '', header, emoji, style }: SubsectionProps) {
  return (
    <div className={`gap-y-4 ${className}`} style={style}>
      <Subheading className="mb-4">
        <span className="mr-2">{emoji}</span> {header}
      </Subheading>
      {children}
    </div>
  );
}
