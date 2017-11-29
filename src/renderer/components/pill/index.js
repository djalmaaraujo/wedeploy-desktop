import React from 'react';

import './index.css';

/**
 * Health status values.
 */
const HEALTH_STATUS = {
  UNHEALTHY: 'unhealthy',
  NONE: 'none',
  HEALTHY: 'healthy',
};

export default ({name, zoom}) => (
  <span className={`pill pill--${name} ${zoom ? 'pill--zoom' : ''}`}>{ name }</span>
)
