interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Subheading({ children, className = '' }: SubheadingProps) {
  return (
    <div className={`text-base text-black dark:text-white opacity-80 self-start ${className}`}>
      {children}
    </div>
  );
}
