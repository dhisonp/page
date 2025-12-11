interface SubsectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  header: string;
}

export function Subsection({ children, className = '', header, style }: SubsectionProps) {
  return (
    <section className={`pt-4 ${className}`} style={style}>
      <h2 className="section-title mb-3">{header}</h2>
      {children}
    </section>
  );
}
