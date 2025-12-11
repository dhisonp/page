export function Masthead() {
  return (
    <header
      className="section-border-bottom pb-[var(--space-4)] mb-[var(--space-6)]"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        gap: 'var(--space-2)',
      }}
    >
      <div>
        <span className="masthead masthead-name">Dhison P.</span>
        <span className="masthead ml-[var(--space-2)] opacity-80">
          Engineering, and more. New York, NY.
        </span>
      </div>
      <span className="masthead opacity-80">dhisonp@gmail.com</span>
    </header>
  );
}
