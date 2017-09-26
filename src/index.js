import React from 'react';

const Typist = ({ text }) => (
  <span> {text} </span>
);

Typist.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default Typist;
