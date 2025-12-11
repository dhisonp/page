interface SubsectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  header: string;
}

export function Subsection({ children, className = '', header, style }: SubsectionProps) {
  return (
    <section className={`pt-[var(--space-4)] ${className}`} style={style}>
      <div className="mb-[var(--space-3)]" style={{ display: 'flex', alignItems: 'center' }}>
        <span className="section-marker" aria-hidden="true" />
        <h2 className="section-title">{header}</h2>
      </div>
      {children}
    </section>
  );
}
