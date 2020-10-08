import React from 'react';
import main from '../../../images/me/TIM_main.jpg';

export default () => (
  <>
    <div className="about-img">
      <img src={main} alt="Tim Harding"/>
      <div className="currently-playing">
        <h3>Check out what I'm listening to: </h3>
        <iframe src="https://open.spotify.com/embed/playlist/61sDD5sTRTAJ6mEz9kNymr" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
    <div className="about-text">
      <h1>Hi, my name is <strong>Tim Harding</strong></h1>
      <p>San Francisco has been home since 2015, although I'm originally from the Boston area and I grew up in Annapolis, MD. I'm an avid skier, sailor, music fan, and crossword addict with a passion for creating beautiful consumer products.</p>
      <p>My whole life has been about merging creative pursuits with my fiendish interest in technology. Illustrator and Final Cut — my favorite applications, before Matlab and Stata took over during my studies at Brown University — had always sparked what my family and friends teasingly called obsessive perfectionism. It took picking up web development, especially JavaScript and React, before I remembered how much fun I used to have obsessing over the details of a challenging design project.</p>
      <p>Check out this site I built and some of the other projects I've worked on below, and please drop me a line if you'd like to work together. Thanks for stopping by!</p>
    </div>
  </>
)
