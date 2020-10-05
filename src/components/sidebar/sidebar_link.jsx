import React from 'react';
import { Link } from 'react-scroll';

export default ({ to, text }) => {
  return (<Link activeClass="active" to={to.substring(1)} containerId='application-body' spy={true}>{text}</Link>)
}