export default function Navigation({ activePage = 'Overview' }: { activePage?: string }) {
  const navItems = [
    { name: 'Overview', href: '/' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Deployments', href: '#' },
    { name: 'Activity', href: '#' },
    { name: 'Domains', href: '#' },
    { name: 'Usage', href: '#' },
    { name: 'Observability', href: '#' },
    { name: 'Storage', href: '#' },
    { name: 'Flags', href: '#' },
    { name: 'AI Gateway', href: '#' },
    { name: 'Sandboxes', href: '#' },
    { name: 'Agent', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Settings', href: '#' },
  ];

  return (
    <nav className="nav">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`nav-item ${item.name === activePage ? 'active' : ''}`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
