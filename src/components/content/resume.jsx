import React from 'react';
import { Element } from 'react-scroll';
import loading from '../../images/loading.gif';

export default () => {
  const publishedUrl = 'https://docs.google.com/document/d/1p7yrvETUEppW3Gct_74sw0XHhH9reLlhcy3zHn-Ff2g/export?format=pdf';
  const visiblePdf = `https://docs.google.com/viewer?url=${publishedUrl}&embedded=true`;
  const downloadResume = () => {
    document.location = publishedUrl;
  }

  const reloadIframe = (e) => {
    e.preventDefault();
    const iframe = document.getElementById('resume-iframe');
    iframe.src = iframe.src;
    // iframe.contentDocument.location.reload(true);
  }

  return (
    <Element name={'resume'} title={'Resume'} id="resume">
      <div id="resume-iframe-container" style={{ backgroundImage: `url("${loading}")` }}>
        {(document.querySelector('input[id^="apiproxy"]')) ? null : <button className="resume-reload-button" onClick={reloadIframe}><i></i></button>}
          <iframe id="resume-iframe" src={visiblePdf}></iframe>
      </div>
      <button onClick={downloadResume}>Download<i></i></button>
    </Element>
)}
