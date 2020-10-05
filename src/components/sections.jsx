import React from 'react';
import Resume from './content/resume';
// import LinkedIn from './content/linkedin';
import AboutMe from './content/about';
import MyWork from './content/projects';
import Contact from './content/contact';


export default () => {

  // useEffect(() => {
  //   configureAnchors()
  // }, []);

  return (
    <>
      <AboutMe />
      <MyWork />
      <Resume />
      <Contact />
    </>
  )
}