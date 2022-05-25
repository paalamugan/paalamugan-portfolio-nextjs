import React, { FunctionComponent } from 'react';
import { GotoTopButton, NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component: FunctionComponent, idName: string, className: string = '') => function HOC() {
  return (
    <section id={idName} className={`app__container ${className || ''}`}>
      {idName === 'home' && <SocialMedia /> }
      <div className="app__wrapper app__flex">
        <Component />
      </div>
      <NavigationDots active={idName} />
      <GotoTopButton />
    </section>
  );
};

export default AppWrap;
