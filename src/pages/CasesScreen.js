// src/pages/CasesScreen.js
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import '../scotus.css';

export default function CasesScreen() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <>
          <TopNav
            title="Case List"
            showBack
            showFavourite
            favourite={false}               /* Wire to real state later */
            onBack={() => navigate(-1)}
            onToggleFavourite={() => {
              /* TODO: implement favourite toggle */
              console.log("Toggle favourite");
            }}
          />

        <div style={{ padding: "1rem" }}>
            <SearchBar
                    value={searchTerm}
                    onSearch={(term) => setSearchTerm(term)}
             />
         </div>
    
          <section style={{ padding: "1rem" }}>
            <p>Cases coming soon…</p>
          </section>
        </>
      );
}
