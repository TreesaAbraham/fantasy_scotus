import React, { useState } from 'react';
import LeaguePill from './LeaguePill';
import '../scotus.css';

export default function LeaguePillsRow({ leagues, defaultId, onChange }) {
  const [selected, setSelected] = useState(defaultId ?? leagues[0]?.id);

  const handle = (id) => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <div className="league-pills-row">
      {leagues.map((lg) => (
        <LeaguePill
          key={lg.id}
          {...lg}
          active={lg.id === selected}
          onSelect={handle}
        />
      ))}
    </div>
  );
}
