import React from "react";
import { Link } from "react-router-dom";
import "./Cv.css";

function Cv() {
  window.scrollTo(0, 0)
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
        <hr></hr>
        <h2>EXPERIENCE</h2>
        <p>
          <b>
            01/2016 – 04/2020 Milja &amp; Schäfa(Restaurant), Berlin, Germany
          </b>
        </p>
        <p>
          <b>Chef</b>
        </p>
        <ul>
          <li>Managing daily operations and suppliers.</li>
          <li>Training and onboarding of the new hires.</li>
          <li>
            Creating new products while keeping the image and brand values of
            the business in mind and taking ownership of quality control
          </li>
          <li>Problem solving and putting customer’s satisfaction first</li>
        </ul>
        <p>
          <b>Achievements: </b>This braced me with the understanding of what it
          means to work in a growing company including changes in team size,
          adjustments in processes and efficiency and flexibility in taking on
          new tasks.
        </p>
        <br></br>
        <p>
          <b>
            01/2015 – 08/2015 Komputronik (Electronics and Computer Shop),
            Bielsko-Biala, Poland
          </b>
        </p>
        <p>
          <b>Clerk</b>
        </p>
        <ul>
          <li>Customer support and purchase advice.</li>
          <li>Technical product presentation.</li>
          <li>Shop organisation for the best marketing results.</li>
          <li>Problem solving and putting customer’s satisfaction first</li>
        </ul>
        <p>
          <b>Achievements: </b>By promoting discounts and finding the most
          suitable products for our customers, I contributed to the shop hitting
          their business goals.
        </p>
        <hr></hr>
        <h2>EDUCATION</h2>
        <p>
          <b>06/2020 – 10/2020 WBS Coding School, Berlin, Germany</b>
        </p>
        <p>
          <b>Full – Stack Web &amp; App Developer</b>
        </p>
        <p>
          Interactive online coding training classes with instructor-led
          lectures, workshops, and team coding challenges in Europe's leading
          hybrid Web &amp; App Development Coding School.{" "}
        </p>
        <br></br>
        <p><b>10/2010 – 08/2013
	Jagiellonen University, Kracow, Poland
</b></p>
<p><b>Bachelor Polnische Philologie</b></p>
<br></br>
<p><b>10/2009 – 08/2010	
	AGH Technical University, Kracow, Poland
</b></p>
<p><b>Elektronics and Telecommunication</b></p>
      </div>
      <div className="cv-right">
        <div className="cv-pic"></div>
      </div>
    </div>
  );
}
export default Cv;
