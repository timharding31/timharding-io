import React, { useEffect } from 'react';
import sections from '../collections/sections';
import { Link, scroller } from 'react-scroll';

export default () => {
  useEffect(() => {
    scroller.scrollTo('about', { containerId: 'application-body', smooth: true, duration: 0, spy: true, hashSpy: true })
  }, []);

  const renderLink = section => (
    <li key={`link-${section.key}`}>
      <Link
        activeClass="active"
        to={section.name}
        containerId='application-body'
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={500}>
        {section.title}
      </Link>
    </li>
  )

  return (
    <ul id="body-nav">
      {sections.map(section => renderLink(section))}
    </ul>)
}