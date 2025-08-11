// src/components/QuestionPresented.js
import React, { useState } from 'react';

/**
 * <QuestionPresented />
 * - Renders a heading + rich text block for the "Question Presented"
 * - Optional expand/collapse for long content (CSS line-clamp so HTML is safe)
 *
 * Props:
 *  - title?: string                    (default "Question Presented")
 *  - content: string | null | undefined
 *  - isHtml?: boolean                  (content contains HTML; default: false)
 *  - collapsible?: boolean             (default: true)
 *  - clampLines?: number               (default: 6)
 *  - className?: string
 */
export default function QuestionPresented({
  title = 'Question Presented',
  content,
  isHtml = false,
  collapsible = true,
  clampLines = 6,
  className = '',
}) {
  const [expanded, setExpanded] = useState(false);
  const hasContent = typeof content === 'string' && content.trim().length > 0;

  // Show the toggle if content is long-ish (heuristic by char count)
  const shouldShowToggle =
    collapsible && hasContent && content.trim().length > 320;

  return (
    <section className={`qp ${className}`}>
      <h2 className="qp__title">{title}</h2>

      <div
  className={`qp__prose ${!expanded && shouldShowToggle ? 'is-clamped' : ''}`}
  style={{ '--qp-lines': clampLines }}
>
        {hasContent ? (
          isHtml ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <p>{content}</p>
          )
        ) : (
          <p className="qp__placeholder">No question presented.</p>
        )}
      </div>

      {shouldShowToggle && (
        <button
          type="button"
          className="qp__toggle"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </section>
  );
}
