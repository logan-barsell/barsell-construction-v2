// components/HamburgerMenu.js
const HamburgerMenu = ({ toggleMenu, menuOpen }) => {
  return (
    <button
      className='sm:hidden flex items-center hover:opacity-80 transition-opacity relative z-20'
      onClick={toggleMenu}
    >
      <svg
        className={`pt-1 xs:pt-0 pb-1 w-7 h-7 transition-all duration-300 transform ${
          menuOpen ? 'rotate-90' : ''
        }`}
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h16'
        ></path>
      </svg>
    </button>
  );
};

export default HamburgerMenu;
