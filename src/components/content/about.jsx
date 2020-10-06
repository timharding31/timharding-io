import React from 'react';
import { Element } from 'react-scroll';
import main from '../../images/me/TIM_main.jpg';

export default () => {

  return (
    <>
    <Element name={'about'} title={'About Me'} id='about'>
      <div className="about-img">
        <img src={main} alt="Tim Harding"/>
      </div>
      <div className="about-text">
        <h1>Hi, my name is <strong>Tim Harding</strong></h1>
        <p>I'm a Software Engineer in San Francisco...</p>
      </div>
    </Element>
    </>
  )
}