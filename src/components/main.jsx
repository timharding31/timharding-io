import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SidebarNav from './sidebar/sidebar_nav';
import Sections from './sections';
import { configureAnchors } from 'react-update-url-on-scroll'
import { useEffect } from 'react';


export default () => {
  useEffect(() => configureAnchors({affectHistory: true}), []);
  return (
    <>
      <aside className="application-sidebar">
        <SidebarNav />
      </aside>
      <section className="application-body" id="application-body">
        <Sections />
          {/* <Route path="/" component={Sections} /> */}
          {/* <Route exact path="/:section" component={Sections} /> */}
      </section>
    </>
  )
}