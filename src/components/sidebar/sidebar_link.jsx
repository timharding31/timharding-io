import React from 'react';
import { Link } from 'react-scroll';

export default ({ to, text }) => {
  return (
    <Link
      activeClass="active"
      to={to}
      containerId='application-body'
      spy={true}
      hashSpy={true}
      smooth={true}
      duration={500}>
      {text}
    </Link>
    )
}