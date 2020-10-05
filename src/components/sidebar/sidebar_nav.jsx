import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarLink from './sidebar_link';
import { scroller } from 'react-scroll';
// import { configureAnchors } from 'react-update-url-on-scroll';

export default () => {
  // const [urlPath, setUrlPath] = useState();
  // const usePath = () => {
  //   let location = useLocation();
  //   let newPath = (location.pathname === '/') ? '/about' : location.pathname;
  //   console.log(location)
  //   useEffect(() => {
  //     setUrlPath(newPath)
  //   }, [location, newPath]);
  // }
  // usePath();
  useEffect(() => {
    scroller.scrollTo('about', { containerId: 'application-body'})
  }, []);
  return (
    <ul id="body-nav">
      <li><SidebarLink to={'/about'} text={'About Me'} /></li>
      <li><SidebarLink to={'/projects'} text={'My Work'} /></li>
      <li><SidebarLink to={'/resume'} text={'Résumé'} /></li>
      <li><SidebarLink to={'/contact'} text={'Contact'} /></li>
    </ul>)
}