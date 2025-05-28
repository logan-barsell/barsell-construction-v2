import Link from 'next/link';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const NavigationLinks = ({
  menuOpen,
  activeLink,
  hoveredLink,
  handleLinkClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <ul
      className={`sm:flex sm:py-0 gap-x-2 md:gap-x-4 items-center space-y-4 sm:space-y-0 transition-all ease-out duration-500 overflow-hidden ${
        menuOpen
          ? 'opacity-100 max-h-[500px] visible py-2 scale-y-100'
          : 'opacity-0 max-h-0 invisible py-0 scale-y-0 sm:opacity-100 sm:max-h-[500px] sm:visible sm:scale-y-100'
      } sm:space-x-4 sm:top-0 sm:opacity-100 sm:max-h-none sm:visible sm:py-0`}
    >
      {navItems.map((item, index) => (
        <li
          key={index}
          className='relative pb-0.5'
        >
          <Link
            href={item.path}
            className={`relative lg:text-xl xs:text-lg text-md block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:transition after:duration-300 after:origin-center 
                ${
                  activeLink === item.path && !hoveredLink
                    ? 'after:scale-x-100'
                    : ''
                }
                ${
                  hoveredLink === item.path || activeLink !== item.path
                    ? 'hover:after:scale-x-100 hover:after:w-full hover:after:left-0'
                    : ''
                }`}
            onClick={() => handleLinkClick(item.path)}
            onMouseEnter={() => handleMouseEnter(item.path)}
            onMouseLeave={handleMouseLeave}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
