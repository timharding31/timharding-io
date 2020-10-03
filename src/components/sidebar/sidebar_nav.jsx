import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarLink from './sidebar_link';

export default () => {
  const [urlPath, setUrlPath] = useState();
  const usePath = () => {
    let location = useLocation();
    let newPath = (location.pathname === '/') ? '/about' : location.pathname;
    useEffect(() => {
      setUrlPath(newPath)
    }, [location])
  }
  usePath();
  return (
    <ul id="body-nav">
      <li><SidebarLink urlPath={urlPath} to={'/about'} text={'About Me'} /></li>
      <li><SidebarLink urlPath={urlPath} to={'/projects'} text={'My Work'} /></li>
      <li><SidebarLink urlPath={urlPath} to={'/resume'} text={'Résumé'} /></li>
      <li><SidebarLink urlPath={urlPath} to={'/contact'} text={'Contact'} /></li>
    </ul>)
}