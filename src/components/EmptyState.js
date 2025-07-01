import React from 'react';
import '../scotus.css';

export default function EmptyState({
  illustration = '/img/empty-box.svg',
  children,
}) {
  return (
    <div className="empty-state">
      <img src={illustration} alt="" className="empty-state__img" />
      <p className="empty-state__hint">{children}</p>
    </div>
  );
}
