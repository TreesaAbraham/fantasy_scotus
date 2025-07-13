import React from "react";
import { FiArrowLeft, FiStar, FiStar as FiStarFilled } from "react-icons/fi"; // outline star, you can swap for Solid if you prefer
import "../scotus.css"; // optional separate stylesheet

export default function TopNav({
  title,
  showBack = false,
  showFavourite = false,
  favourite = false,
  onBack,
  onToggleFavourite,
}) {
  return (
    <nav className="topnav">
      {/* Left slot – back arrow */}
      <div className="slot">
        {showBack && (
          <button
            aria-label="Go back"
            className="icon-btn"
            onClick={onBack}
            type="button"
          >
            <FiArrowLeft size={20} />
          </button>
        )}
      </div>

      {/* Title */}
      <h1 className="title">{title}</h1>

      {/* Right slot – favourite */}
      <div className="slot">
        {showFavourite && (
          <button
            aria-label={favourite ? "Unfavourite" : "Favourite"}
            className="icon-btn"
            onClick={onToggleFavourite}
            type="button"
          >
            {favourite ? (
              /* filled star – replace with solid variant if you add one */
              <FiStarFilled size={20} />
            ) : (
              <FiStar size={20} />
            )}
          </button>
        )}
      </div>
    </nav>
  );
}
