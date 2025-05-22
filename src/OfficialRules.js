// src/OfficialRules.js
import React from 'react';
import Navbar from './Navbar';


export default function OfficialRules() {
  return (
    <>
    {/* Reusable navigation bar */}
          <Navbar />
      <div className="official-rules">
      <h1>Official Rules of the FantasySCOTUS Contest</h1>

      <p>
        Josh Blackman LLC, referred to hereafter as Sponsor, is pleased to sponsor the FantasySCOTUS – October 2019 Term of the United States Supreme Court Contest (“Contest”). The Contest begins October 7, 2019 and ends July 1, 2020. Below are the Official Contest Rules (“Rules”).
      </p>

      <section>
        <h2>Eligibility &amp; Entry</h2>
        <p>No purchase necessary to enter or win. Void where prohibited by law. Sponsor reserves the right to cancel the contest at any time. You must be 18 years of age or older to win a prize. Employees, officers, directors of the Sponsor, their respective parent companies, affiliates, subsidiaries and the members of their immediate family (parents, siblings, children &amp; spouse), or anyone living in their household, are ineligible for prizes.</p>
        <p>Participants must submit their predictions online at <a href="https://fantasyscotus.net">https://fantasyscotus.net</a> (“Site”). No other form of entry will be accepted.</p>
      </section>

      <section>
        <h2>Predictions</h2>
        <p>Participants will be able to make predictions on how each Justice will vote for cases argued before the United States Supreme Court (“Court”). Participants can select that a Justice will vote to <strong>AFFIRM</strong>, <strong>REVERSE</strong>, or <strong>RECUSE</strong> from a case.</p>
        <p>Participants may enter or change predictions at any point before the case decision is known to the participant or public. The Sponsor reserves the right to determine when the decision is known (generally 10:00 AM ET on decision day) and may void any predictions made after that time.</p>
      </section>

      <section>
        <h2>Elect League &amp; Prizes</h2>
        <p>The Prize structure for the Elect League will be announced later in the Term. No cash prizes will be awarded.</p>
        <p>Prizes will be awarded to participants based on points scored. In the event of a tie, tied prizes will be combined and split evenly among tying participants. Cases dismissed as improvidently granted (DIG) or affirmed by an equally divided margin yield no points. Winners will be notified by email within 30 days of contest end, and must claim their prize within 30 days. Prizes will be awarded within 75 days of the final contest date. Only U.S. citizens or resident aliens are eligible. All Sponsor decisions regarding scoring, ranking, and awards are final.</p>
        <p>Elect League members may also be eligible for case-specific contests or prizes announced during the Term.</p>
      </section>

      <section>
        <h2>Points</h2>
        <p>Each correct Justice vote (AFFIRM or REVERSE) is worth 10 points. No points for RECUSE. Predicting all nine Justices correctly yields 90 points; predicting the overall case outcome adds 10 points, for a maximum of 100 points per case (90 points max with an eight-member Court).</p>
        <p><em>Example:</em> In <strong>Schwarzenegger v. Entertainment Media Association</strong>, a participant who correctly predicts eight out of nine Justice votes (but misses one) and the overall outcome would earn 80 points.</p>
        <p>When votes or decisions are mixed (e.g. “affirm in part, reverse in part”), a panel of legal professionals will determine the more prominent outcome. DIGs or Vacated &amp; Remanded cases are treated as DIGs (0 points). Panel decisions are final.</p>
      </section>

      <section>
        <h2>Additional Terms</h2>
        <ul>
          <li>All Sponsor determinations are final.</li>
          <li>Participants release Sponsor and its affiliates from any claims related to the Contest.</li>
          <li>Usernames and affiliations may be used for leaderboards or promotions; personally identifiable information will only be used for Contest operations.</li>
          <li>Sponsor is not responsible for late, lost, illegible, incomplete, damaged, or misdirected entries, and reserves the right to disqualify cheaters or tamperers.</li>
          <li>Notices or rule changes will be posted on the Site, blog, or sent via email and serve as constructive notice.</li>
        </ul>
      </section>
    </div>
    </>
  );
}
