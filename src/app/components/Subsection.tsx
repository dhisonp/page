import { Subheading } from './Subheading';

interface SubsectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  header: string;
}

export function Subsection({ children, className = '', header, style }: SubsectionProps) {
  return (
    <div
      className={`section-border p-[var(--space-3)] gap-y-4 ${className}`}
      style={style}
    >
      <Subheading className="mb-[var(--space-2)] section-border-bottom pb-[var(--space-2)]">
        {header}
      </Subheading>
      {children}
    </div>
  );
}
