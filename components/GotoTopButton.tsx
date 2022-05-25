import React, { useRef, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const GotoTopButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (!ref.current) return;
    if (window.scrollY > window.innerHeight) {
      ref.current.style.display = 'flex';
    } else {
      ref.current.style.display = 'none';
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="flex items-center justify-center text-white app__goto-top">
      <a href="#home">
        <FaAngleUp className="h-8" />
      </a>
    </div>
  );
};

export default GotoTopButton;
