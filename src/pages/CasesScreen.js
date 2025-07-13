// src/pages/CasesScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import '../scotus.css';

export default function CasesScreen() {
    const navigate = useNavigate();
    
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
    
          <section style={{ padding: "1rem" }}>
            <p>Cases coming soon…</p>
          </section>
        </>
      );
}
