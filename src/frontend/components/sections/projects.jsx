import React, { useState } from 'react';
import technologies from '../../collections/technologies';
import projectsList from '../../collections/projects';

export default () => {
  const renderTech = ({ name, svg }, idx) => (
    <li key={`tech-${idx}`}>
      {svg}
      <p className="tech-name">{name}</p>
    </li>
  )

  const changeSelection = key => {
    return e => {
      e.preventDefault();
      setSelected(key);
    }
  }

  let [selected, setSelected] = useState('coup');

  const renderTab = project => (
    <div key={`selector-${project.key}`} className={`project-selector ${selected === project.key ? 'active': ''}`} style={project.tabStyle} onClick={changeSelection(project.key)}>
      <img src={project.iconSrc} alt=""/>
      <p style={project.hStyle}>{project.name}</p>
    </div>
  )

  const renderProject = (project, state) => {
    if (project.key === state) {
      return (
        <div className="selected-project" key={`selected-${project.key}`} style={project.divStyle}>
          <div className="border-top-left" style={project.topLeftStyle} />
          <div className="border-top-right" style={project.topRightStyle} />
          <div className="project-assets">
            <div className="project-links">
              <a style={project.linkStyle} href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
              {project.sourceLink ? <a style={project.linkStyle} href={project.sourceLink} target="_blank" rel="noopener noreferrer">Source Code</a> : null}
            </div>
            <img className="project-image" src={project.imgSrc} alt={project.key} />
          </div>
        <div className="project-description">
            {project.description.map((paragraph, idx) => (<p key={`p-${project.key}-${idx}`} style={project.pStyle}>{paragraph}</p>))}
        </div>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <>
      <div className="technologies-pane">
        <p>I know:</p>
        <ul className="my-technologies">
          {technologies.map((tech, idx) => renderTech(tech, idx))}
        </ul>
      </div>
      <div className="my-projects">
        <p>I've built:</p>
        <div className="project-pane">
          <div className="project-selectors">
            {projectsList.map(project => renderTab(project))}
          </div>
            {projectsList.map(project => renderProject(project, selected))}
        <div className="site-about">
          <p>I also built this site with React, check it out on <a href="https://github.com/timharding31/timharding-io" target="_blank" rel="noopener noreferrer"> GitHub</a>!</p>
        </div>
        </div>
      </div>
    </>
  )
}
