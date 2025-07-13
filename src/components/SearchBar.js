import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import '../scotus.css';   
/**
 * Props:
 *  - value:        string (controlled value)
 *  - placeholder:  string
 *  - onSearch:     (term: string) => void  (called after debounce)
 *  - delay:        number (ms)  – optional, defaults to 300
 */
export default function SearchBar({
  value,
  placeholder = "Search…",
  onSearch,
  delay = 300,
}) {
  const [internal, setInternal] = useState(value || "");
  const timer = useRef(null);

  // When parent changes value, sync internal
  useEffect(() => setInternal(value || ""), [value]);

  // Debounce: fire onSearch after user stops typing
  useEffect(() => {
    if (!onSearch) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => onSearch(internal.trim()), delay);
    return () => clearTimeout(timer.current);
  }, [internal, onSearch, delay]);

  return (
    <div className="searchbar">
      <FiSearch className="icon" size={18} />
      <input
        className="input"
        type="text"
        value={internal}
        placeholder={placeholder}
        onChange={(e) => setInternal(e.target.value)}
      />
    </div>
  );
}
