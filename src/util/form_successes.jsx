import React from 'react';

export default ({ successes }) => {
  // if (successes.length === 0) return null;

  return (
    <>
      {successes.length === 0 ? null : successes.map((success, idx) => <p key={`sucecess-${idx}`} className="form-success">{success}</p>)}
    </>
  )
}