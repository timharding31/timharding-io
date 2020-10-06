import React from 'react';

export default ({ successes }) => {
  // if (successes.length === 0) return null;

  return (
    <>
      {successes.length === 0 ? null : successes.map(success => <p className="form-success">{success}</p>)}
    </>
  )
}