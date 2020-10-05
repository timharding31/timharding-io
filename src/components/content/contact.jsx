import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { Element } from 'react-scroll';

export default () => {

  return (
    <Element name={'contact'} title={'Contact'} key={123456}>
      <div className="scrollable-section">
        <h1>Contact</h1>
      </div>
    </Element>
  )
}
