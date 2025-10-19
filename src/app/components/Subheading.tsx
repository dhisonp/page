interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Subheading({ children, className = '' }: SubheadingProps) {
  return (
    <div className={`text-base text-zinc-600 dark:text-zinc-400 self-start ${className}`}>
      {children}
    </div>
  );
}
