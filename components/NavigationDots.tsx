/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import { capitalizeCase, navLinks } from '../constants';

interface NavigationDotsProps {
  active: string
}

const NavigationDots = ({ active }: NavigationDotsProps) => (
  <div className="app__navigation">
    {navLinks.map((item, index) => (
      <a
        title={capitalizeCase(item)}
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: 'rgb(var(--primary-color))' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
