import { useState } from 'react';

/**
 * Reusable pill-style tab bar.
 *
 * props:
 *  - tabs: [{ id:'all',   label:'All',       icon:'📄' },
 *           { id:'open',  label:'Ongoing',   icon:'🔥' },
 *           { id:'done',  label:'Completed', icon:'📋' }]
 *  - onChange(id) → called with the clicked tab id
 *  - defaultId (optional)
 */
export default function PillTabBar({ tabs, onChange, defaultId }) {
  const [selected, setSelected] = useState(defaultId ?? tabs[0].id);

  const handleClick = (id) => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <div className="pill-tabs">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`pill ${selected === t.id ? 'active' : ''}`}
          onClick={() => handleClick(t.id)}
        >
          <span className="icon">{t.icon}</span>
          {t.label}
        </button>
      ))}
    </div>
  );
}
