const mockBlogs = [
  { title: 'Blog', category: 'Engineering', date: '2025-01-15' },
  { title: 'Blog', category: 'Music', date: '2025-01-10' },
  { title: 'Blog', category: 'Photography', date: '2025-01-05' },
  { title: 'Blog', category: 'Engineering', date: '2024-12-20' },
  { title: 'Blog', category: 'Music', date: '2024-12-15' },
];

export function BlogList() {
  return (
    <section className="h-full max-w-xl overflow-y-auto scrollbar-none" aria-label="Blog posts">
      <h3 className="mb-4">Writings</h3>

      <ul className="space-y-4">
        {mockBlogs.map((blog, index) => (
          <li key={index} className="space-y-1">
            <p className="">{blog.title}</p>
            <div className="flex gap-2 text-sm text-gray-500 w-44">
              <span>{blog.category}</span>
              <span>-</span>
              <time dateTime={blog.date}>{blog.date}</time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
