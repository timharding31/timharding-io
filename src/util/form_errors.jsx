import React from 'react';

export default ({ errors }) => {
  // if (errors.length === 0) return null;

  return (
    <>
      {errors.length === 0 ? null : errors.map(error => <p className="form-error">{error}</p>)}
    </>
  )
}