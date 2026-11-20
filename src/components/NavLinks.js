import Link from 'next/link';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const NavigationLinks = ({
  menuOpen,
  isMobile,
  activeLink,
  hoveredLink,
  handleLinkClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      id='primary-navigation'
      className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:block ${
        menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
      aria-hidden={isMobile ? !menuOpen : undefined}
      inert={isMobile && !menuOpen ? true : undefined}
    >
      <div className='min-h-0 overflow-hidden'>
        <ul className='space-y-4 py-3 sm:flex sm:items-center sm:gap-x-2 sm:space-x-4 sm:space-y-0 sm:py-0 md:gap-x-4'>
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
      </div>
    </div>
  );
};

export default NavigationLinks;
