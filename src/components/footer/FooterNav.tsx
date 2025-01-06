export default function FooterNav() {
  const links = {
    'Company': ['About', 'Programs', 'Services', 'Contact'],
    'Resources': ['Documentation', 'Support']
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      {Object.entries(links).map(([category, items]) => (
        <div key={category} className="space-y-6">
          <h3 className="text-lg font-semibold text-white">{category}</h3>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}