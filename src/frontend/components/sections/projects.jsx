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
          <div className="project-assets">
            <div className="project-links">
              <a style={project.linkStyle} href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
              <a style={project.linkStyle} href={project.sourceLink} target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
            <img className="project-image" src={project.imgSrc} alt={project.key} />
          </div>
        <div className="project-description">
          <p style={project.pStyle}>{project.description}</p>
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
        </div>
      </div>
    </>
  )
}
