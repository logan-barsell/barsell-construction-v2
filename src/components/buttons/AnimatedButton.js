'use client';

const AnimatedButton = ({ text, onClick, color = 'white', className = '' }) => {
  const isBlack = color === 'black';

  const baseButton =
    'relative w-[200px] h-[50px] border flex items-center justify-center transition-all duration-1000 group';
  const borderColor = isBlack ? 'border-black/70' : 'border-white/30';
  const hoverBg = isBlack ? 'hover:bg-black/10' : 'hover:bg-white/10';
  const textColor = isBlack ? 'text-black' : 'text-white';
  const textShadow = isBlack ? '' : 'text-shadow-md';
  const lineColor = isBlack ? 'bg-black' : 'bg-white';

  return (
    <button
      type='button'
      aria-label={text}
      onClick={onClick}
      className={`${baseButton} ${borderColor} ${hoverBg} ${className}`}
    >
      {/* Decorative Lines */}
      <div
        className={`absolute bottom-0 h-px w-[20%] origin-bottom-right transform scale-0 opacity-100 group-hover:scale-100 group-hover:opacity-0 transition-all duration-1000 ${lineColor}`}
      />
      <div
        className={`absolute bottom-0 left-[-1px] h-full w-px origin-bottom-right transform scale-0 opacity-100 group-hover:scale-100 group-hover:opacity-0 transition-all duration-1000 delay-500 ${lineColor}`}
      />
      <div
        className={`absolute top-[-1px] left-[-1px] h-px w-full origin-bottom-left transform scale-0 opacity-100 group-hover:scale-100 group-hover:opacity-0 transition-all duration-1000 delay-900 ${lineColor}`}
      />
      <div
        className={`absolute top-[-1px] right-0 h-px w-[20%] origin-bottom-left transform scale-0 opacity-100 group-hover:scale-100 group-hover:opacity-0 transition-all duration-1000 ${lineColor}`}
      />
      <div
        className={`absolute bottom-0 right-[-1px] h-full w-px origin-top-right transform scale-0 opacity-100 group-hover:scale-100 group-hover:opacity-0 transition-all duration-1000 delay-500 ${lineColor}`}
      />
      <div
        className={`absolute bottom-0 right-[-1px] h-px w-full origin-top-right transform scale-0 opacity-100 group-hover:scale-100 group-hover:opacity-0 transition-all duration-1000 delay-900 ${lineColor}`}
      />

      {/* Button Text */}
      <span className={`font-normal ${textColor} ${textShadow}`}>{text}</span>
    </button>
  );
};

export default AnimatedButton;
