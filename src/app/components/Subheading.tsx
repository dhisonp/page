interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Subheading({ children, className = '' }: SubheadingProps) {
  return (
    <div
      className={`text-black dark:text-white opacity-80 self-start ${className}`}
      style={{ fontSize: 'var(--text-base)', lineHeight: 1.4 }}
    >
      {children}
    </div>
  );
}
