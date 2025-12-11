interface SubsectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  header: string;
}

export function Subsection({ children, className = '', header, style }: SubsectionProps) {
  return (
    <section className={`pt-4 ${className}`} style={style}>
      <div className="mb-3 flex items-center">
        <span className="section-marker" aria-hidden="true" />
        <h2 className="section-title">{header}</h2>
      </div>
      {children}
    </section>
  );
}
