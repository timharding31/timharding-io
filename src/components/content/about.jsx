import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { Element } from 'react-scroll';

export default () => {

  return (
    <>
    <Element name={'about'} title={'About Me'} key={123}>
      <div className="scrollable-section">
        <h1>About Me</h1>
      </div>
    </Element>
    </>
  )
}
