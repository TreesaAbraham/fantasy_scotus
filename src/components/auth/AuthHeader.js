import React from 'react';
import '../../scotus.css';

export default function AuthHeader(options) {
  const opts = options || {};
  const title = opts.title || 'Sign In';
  const subtitle = opts.subtitle;

  return React.createElement(
    'header',
    { className: 'auth-header', role: 'banner' },
    React.createElement('div', { className: 'auth-header__illu', 'aria-hidden': 'true' }),
    React.createElement('h1', { className: 'auth-header__title' }, title),
    subtitle ? React.createElement('p', { className: 'auth-muted', style: { marginTop: 6 } }, subtitle) : null
  );
}
