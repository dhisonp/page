interface LinkListProps {
  links: Array<{ label: string; href: string }>;
}

export function LinkList({ links }: LinkListProps) {
  return (
    <ul className="flex flex-wrap gap-4">
      {links.map(({ label, href }) => (
        <li key={href} className="link-item">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {label} ↗
          </a>
        </li>
      ))}
    </ul>
  );
}
