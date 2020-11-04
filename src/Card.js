import React from "react";
import "./Card.css";
function Card({newConfirmed,totalConfirmed,totalDeaths,totalRecovered}) {
  return (
    <div className="card">
      <div className="card-symptoms-container">
        <h1>Covid-19</h1>
        <div className="card-symptoms">
          <h2>Symptoms</h2>
          <p>
            Fever: 99% Fatigue:70% A dry cough: 59% Loss of appetite: 40% Body
            aches: 35% Shortness of breath: 31% Mucus or phlegm: 27% Symptoms
            usually begin 2 to 14 days after you come into contact with the
            virus. Other symptoms may include: Sore throat Headache Chills,
            sometimes with shaking Loss of smell or taste Congestion or runny
            nose Nausea or vomiting Diarrhea
          </p>
        </div>
      </div>

      <div className="card-stats-container">
        <div className="card-stats-info">
          <h4>New Confirmed</h4>
          <h2 className="New-Confirmed">{newConfirmed}</h2>
        </div>
        <div className="card-stats-info">
          <h4>Total Confirmed</h4>
          <h2 className="Total-Confirmed">{totalConfirmed}</h2>
        </div>
        <div className="card-stats-info">
          <h4>Total Deaths</h4>
          <h2 className="Total-Deaths">{totalDeaths}</h2>
        </div>
        <div className="card-stats-info">
          <h4>Total Recovered</h4>
          <h2 className="Total-Recovered">{totalRecovered}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
