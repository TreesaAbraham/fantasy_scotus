// src/components/JusticeRow.js
import React, { useCallback } from 'react';
import '../scotus.css';

/**
 * JusticeRow
 * - Shows avatar + name + two pill "radio" buttons (Affirm/Reverse)
 * - value: 'affirm' | 'reverse' | null
 * - onChange(justiceId, vote) where vote can be 'affirm' | 'reverse' | null
 */
export default function JusticeRow({ justice, value = null, onChange }) {
  const isAffirm  = value === 'affirm';
  const isReverse = value === 'reverse';

  const setVote = useCallback((vote) => {
    // Click same pill again → clear (null) so parent can store null
    const next = value === vote ? null : vote;
    onChange?.(justice.id, next);
  }, [justice.id, onChange, value]);

  const onKeyDown = (e) => {
    // Keyboard support for accessibility
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setVote('affirm');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setVote('reverse');
    } else if (e.key.toLowerCase() === 'a') {
      setVote('affirm');
    } else if (e.key.toLowerCase() === 'r') {
      setVote('reverse');
    } else if (e.key === ' ' || e.key === 'Enter') {
      // Space/Enter toggles currently focused radio
      const targetVote = e.currentTarget.getAttribute('data-vote');
      if (targetVote) {
        e.preventDefault();
        setVote(targetVote);
      }
    }
  };

  // Which radio should be tabbable by default?
  const tabAffirm  = isAffirm || (!isAffirm && !isReverse);
  const tabReverse = isReverse;

  return (
    <div className="jrow" role="group" aria-label={justice.name}>
      <div className="jrow__left">
        <Avatar justice={justice} />
        <div className="jrow__name">{justice.name}</div>
      </div>

      <div className="jrow__right" role="radiogroup" aria-label={`${justice.name} vote`}>
        <button
          type="button"
          className={`pill pill--affirm ${isAffirm ? 'is-active' : ''}`}
          role="radio"
          aria-checked={isAffirm}
          data-vote="affirm"
          onClick={() => setVote('affirm')}
          onKeyDown={onKeyDown}
          tabIndex={tabAffirm ? 0 : -1}
        >
          Affirm
        </button>

        <button
          type="button"
          className={`pill pill--reverse ${isReverse ? 'is-active' : ''}`}
          role="radio"
          aria-checked={isReverse}
          data-vote="reverse"
          onClick={() => setVote('reverse')}
          onKeyDown={onKeyDown}
          tabIndex={tabReverse ? 0 : -1}
        >
          Reverse
        </button>
      </div>
    </div>
  );
}

function Avatar({ justice }) {
  const { avatarUrl, initials = '?' } = justice || {};
  return (
    <div className="jrow__avatar" aria-hidden="true">
      {avatarUrl ? (
        <img src={avatarUrl} alt="" />
      ) : (
        <span className="jrow__initials">{initials}</span>
      )}
    </div>
  );
}
