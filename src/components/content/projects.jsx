import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { Element } from 'react-scroll';

export default () => {

  return (
    <Element name={'projects'} title={'My Work'} key={1234}>
      <div className="scrollable-section">
        <h1>My Work</h1>
      </div>
    </Element>
  )
}
