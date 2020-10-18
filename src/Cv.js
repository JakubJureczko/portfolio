import React from "react";
import { Link } from "react-router-dom";
import "./Cv.css";

function Cv() {
  return (
    <div className="cv">
      <div className="cv-left">
        <Link to="/">
          <p>back</p>
        </Link>
        <h2>PROFILE</h2>
        <p>
          Analytical, self-driven and detail-oriented Web Developer with a
          passion for creating elegant, user-friendly solutions. Equipped with a
          creative mind, customer service experience and newly acquired
          understanding of front-end and back-end coding languages I am eager to
          invest myself to solving problems and finding best possible results
          for the customer.
        </p>
        <h2>EXPERIENCE</h2>
        <p><b>01/2016 – 04/2020
	Milja&Schäfa(Restaurant), Berlin, Germany
</b></p>
<p><b>Chef</b></p>
      <ul>
        <li>Managing daily operations and suppliers.</li>
        <li>Training and onboarding of the new hires.</li>
        <li>Creating new products while keeping the image and brand values of the business in mind and taking ownership of quality control</li>
        <li>Problem solving and putting customer’s satisfaction first</li>
      </ul>
      <p><b>Achievements: </b>This braced me with the understanding of what it means to work in a growing company including changes in team size,
adjustments in processes and efficiency and flexibility in taking on new tasks.
</p>
      </div>
      <div className="cv-right">
        <div className="cv-pic"></div>
      </div>
    </div>
  );
}
export default Cv;
