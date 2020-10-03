import React from 'react';
import { Link } from 'react-router-dom';

export default ({ urlPath, to, text }) => {
  const activeStatus = (urlPath === to) ? 'active' : 'inactive';
  return (<Link to={to} className={activeStatus}>{text}</Link>)
}