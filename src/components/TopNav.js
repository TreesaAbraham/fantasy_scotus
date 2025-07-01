import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaRegStar } from 'react-icons/fa';
import '../scotus.css'; // Import your styles

/**
 * Re-usable page header
 *
 * @param {string}  title             – centred text
 * @param {boolean} isFavourite       – current starred state
 * @param {func}    onToggleFavourite – callback for star button
 * @param {boolean} showBack          – hide arrow on root pages
 */
export default function TopNav({
  title,
  isFavourite = false,
  onToggleFavourite,
  showBack = true,
}) {
  const navigate = useNavigate();

  return (
    <header className="top-nav">
      {/* Back arrow */}
      {showBack ? (
        <button
          aria-label="Go back"
          className="top-nav__icon-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>
      ) : (
        <span className="top-nav__spacer" />
      )}

      {/* Centred title (flex-trick) */}
      <h1 className="top-nav__title">{title}</h1>

      {/* Favourite toggle */}
      {onToggleFavourite ? (
        <button
          aria-label={isFavourite ? 'Remove favourite' : 'Add favourite'}
          className="top-nav__icon-btn"
          onClick={onToggleFavourite}
        >
          {isFavourite ? <FaStar /> : <FaRegStar />}
        </button>
      ) : (
        <span className="top-nav__spacer" />
      )}
    </header>
  );
}
