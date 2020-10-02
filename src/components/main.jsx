import React from 'react';
import { Route } from 'react-router-dom';
import Resume from './content/resume';

export default () => (
  <section className="application-body">
    <Route exact path="/resume" component={Resume} />
  </section>
)