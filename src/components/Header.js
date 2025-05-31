'use client';
import { useState, useEffect, useCallback } from 'react';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import NavLinks from './NavLinks';
import useIsMobile from '@/hooks/useIsMobile';
import useHideOnScroll from '@/hooks/useHideOnScroll';
import ClickOutside from './ClickOutside';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [state, setState] = useState({
    activeLink: null,
    hoveredLink: null,
    menuOpen: false,
  });

  const isMobile = useIsMobile();
  const showNav = useHideOnScroll();

  const pathname = usePathname();

  useEffect(() => {
    setState(prevState => ({ ...prevState, activeLink: pathname }));
  }, [pathname]);

  useEffect(() => {
    if (!isMobile) {
      setState(prevState => ({ ...prevState, menuOpen: false }));
    }
  }, [isMobile]);

  const handleLinkClick = useCallback(link => {
    setState(prevState => ({
      ...prevState,
      menuOpen: false,
    }));
  }, []);

  const handleMouseEnter = useCallback(
    link => setState(prevState => ({ ...prevState, hoveredLink: link })),
    []
  );

  const handleMouseLeave = useCallback(() => {
    setState(prevState => ({ ...prevState, hoveredLink: null }));
  }, []);

  const toggleMenu = useCallback(() => {
    setState(prevState => ({ ...prevState, menuOpen: !prevState.menuOpen }));
  }, []);

  const handleClickOutside = () => {
    setState(prevState => ({ ...prevState, menuOpen: false })); // Close menu on click outside
  };

  return (
    <ClickOutside onClickOutside={handleClickOutside}>
      <header
        className={`will-change-transform z-40 bg-nav p-2 pt-0 pb-0 xs:p-6 xs:pb-0 xs:pt-0 shadow-md text-white border-solid border-b border-primary  fixed w-full top-0 transition-all duration-300 ease-in-out transform ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className='mx-auto flex justify-between items-start xs:items-end'>
          <div className='hidden lg:block lg:w-1/3 lg:flex lg:justify-start'>
            <h1 className='text-3xl leading-normal '>Barsell Construction</h1>
          </div>

          {/* Logo and Company Name */}
          <div className='lg:w-1/3 lg:flex lg:justify-center'>
            <Logo
              menuOpen={state.menuOpen}
              isMobile={isMobile}
            />
          </div>

          <div className='lg:w-1/3 lg:flex lg:justify-end'>
            <div className='flex flex-col items-end pt-3 xs:pt-6'>
              {/* Hamburger Icon for Mobile */}
              <HamburgerMenu
                toggleMenu={toggleMenu}
                menuOpen={state.menuOpen}
              />

              {/* Navigation Links */}
              <NavLinks
                menuOpen={state.menuOpen}
                activeLink={state.activeLink}
                hoveredLink={state.hoveredLink}
                handleLinkClick={handleLinkClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        </nav>
      </header>
    </ClickOutside>
  );
};

export default Header;
