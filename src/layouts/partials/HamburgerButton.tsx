import React, { useState } from 'react';

const HamburgerButton = ({ onClick }: { onClick: Function }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick && onClick(!isOpen);
  };

  return (
    <button className='text-white' onClick={handleClick}>
      {isOpen ? (
        <svg
          className="h-6 fill-current"
          viewBox="0 0 20 20"
        >
          <title>Menu Close</title>
          <polygon
            points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
            transform="rotate(45 10 10)"
          ></polygon>
        </svg>
      ) : (
        <svg
          className="h-6 fill-current"
          viewBox="0 0 20 20"
        >
          <title>Menu Open</title>
          <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
        </svg>

      )}
    </button>
  );
};

export default HamburgerButton;