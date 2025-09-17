import React from 'react';
import '../../scotus.css';

export default function AuthLayout(props) {
  return React.createElement(
    'div',
    { className: 'auth-wrap' },
    React.createElement('div', { className: 'auth-card', role: 'main', 'aria-label': 'Authentication' }, props.children)
  );
}
