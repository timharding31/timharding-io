import React from 'react';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Resume from '../components/sections/resume';
import Contact from '../components/sections/contact';

const aboutMe = {
  key: 1,
  name: 'about',
  title: 'About Me',
  component: <About />
}

const myWork = {
  key: 2,
  name: 'projects',
  title: 'My Work',
  component: <Projects />
}

const resume = {
  key: 3,
  name: 'resume',
  title: 'Résumé',
  component: <Resume />
}

const contact = {
  key: 4,
  name: 'contact',
  title: 'Contact',
  component: <Contact />
}

export default [aboutMe, myWork, resume, contact];