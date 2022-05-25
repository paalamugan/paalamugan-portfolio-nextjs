import Image from 'next/image';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import { images } from '../../constants';

import './ToggleTheme.scss';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };
  return (
    <div className="t">
      <Image src={images.sun} alt="Sun" className="t-icon" width={15} height={15}/>
      <Image src={images.moon} alt="Moon" className="t-icon" width={15} height={15} />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      />
    </div>
  );
};

export default Toggle;
