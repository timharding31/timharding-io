import React from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../../files/tim_harding_resume.pdf';

export default () => (
  <div id="resume-iframe">
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vTKkAxJgVaDhi85_dFzRO3kOC9gu9WqT4wFq_2HSNZpWWOGFIseKEhkWiUaU_a4S_V6tjeFIYMt8qgt/pub?embedded=true"></iframe>
  </div>
  // <Document
  //   options={{ workerSrc: "pdf.worker.js" }}
  //   file={resume}>
  //   <Page pageNumber={1} />
  // </Document>
)
