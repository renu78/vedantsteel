import Link from 'next/link';

const Sidebar = () => {
  const menu = [
    { name: 'Home', path: '/home' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact Us', path: '/contactus' },
    { name: 'Our Products', path: '/products' },
  ];

  return (
    <aside className="w-80 bg-white shadow-lg px-6 py-8 h-100%  border-r overflow-auto">

      <nav>
        <ul className="space-y-4">
          {menu.map((item) => (
            <li key={item.name}>
              <Link href={item.path} className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;