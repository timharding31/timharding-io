import React from 'react';
import { Route, Link } from 'react-router-dom';
import SidebarNav from './sidebar/sidebar_nav';
import Resume from './content/resume';
import LinkedIn from './content/linkedin';

export default () => (
  <>
    <aside className="application-sidebar">
      <SidebarNav />
    </aside>
    <section className="application-body">
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/linkedin" component={LinkedIn} />
    </section>
  </>
)