import React from 'react';

import './index.css';

export default ({name, zoom}) => (
  <span className={`pill pill--${name} ${zoom ? 'pill--zoom' : ''}`}>{ name }</span>
)
