import React from 'react';
import SidebarNav from './sidebar';
import sections from '../collections/sections';
import { Element } from 'react-scroll';


export default () => {
  const renderSection = section => (
    <Element name={section.name} title={section.title} id={section.name} key={`section-${section.key}`}>
      {section.component}
    </Element>
  )

  return (
    <>
      <aside className="application-sidebar">
        <SidebarNav />
      </aside>
      <section className="application-body" id="application-body">
        {sections.map(section => renderSection(section))}
      </section>
    </>
  )
}