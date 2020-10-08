import React from 'react';
import loading from '../../../images/loading.gif';

export default () => {
  const publishedUrl = 'https://docs.google.com/document/d/1p7yrvETUEppW3Gct_74sw0XHhH9reLlhcy3zHn-Ff2g/export?format=pdf';
  const visiblePdf = `https://docs.google.com/viewer?url=${publishedUrl}&embedded=true`;
  const downloadResume = () => {
    document.location = publishedUrl;
  }

  return (
    <>
      <div id="resume-iframe-container" style={{ backgroundImage: `url("${loading}")` }}>
          <iframe id="resume-iframe" src={visiblePdf} title='resume'></iframe>
      </div>
      <button onClick={downloadResume}>Download<i></i></button>
    </>
)}
