import React from 'react';
import SidebarNav from './sidebar/sidebar_nav';
import { useEffect } from 'react';
import Resume from './content/resume';
import AboutMe from './content/about';
import MyWork from './content/projects';
import Contact from './content/contact';


export default () => (
    <>
      <aside className="application-sidebar">
        <SidebarNav />
      </aside>
      <section className="application-body" id="application-body">
        <AboutMe />
        <MyWork />
        <Resume />
        <Contact />
      </section>
    </>)