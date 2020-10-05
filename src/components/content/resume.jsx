import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { Element } from 'react-scroll';

export default () => {
  const publishedUrl = 'https://docs.google.com/document/d/1p7yrvETUEppW3Gct_74sw0XHhH9reLlhcy3zHn-Ff2g/export?format=pdf';
  const visiblePdf = `https://docs.google.com/viewer?url=${publishedUrl}&embedded=true`;
  const downloadResume = () => {
    document.location = publishedUrl;
  }

  return (
    <Element name={'resume'} title={'Resume'} key={12345}>
      <div className="scrollable-section">
      <div id="resume-iframe">
          <iframe src={visiblePdf}></iframe>
      </div>
        <button onClick={downloadResume}>Download</button>
      </div>
    </Element>
)}
