import React, { useState } from 'react';
import './App.css';
import { Stopwatch } from './Stopwatch';
// Importing logo images
import petagonLogo from './assets/petagon-logo.png';
import ddlcLogo from './assets/ddlc-logo.png';
import daugLogo from './assets/daug-logo.png';
import madayawLogo from './assets/madayaw-logo.png';

function App() {
  const [lapsByDistance, setLapsByDistance] = useState({
    "1.5km": [],
    "3km": [],
    "5km": [],
  });

  const addLap = (raceDistance, lapTime) => {
    setLapsByDistance(prevLaps => ({
      ...prevLaps,
      [raceDistance]: [...prevLaps[raceDistance], lapTime],
    }));
  };

// Function to render tables for each race distance
const renderLapTables = () => {
  return (
    <div className="laps-section">
      {Object.entries(lapsByDistance).map(([distance, laps]) => (
        laps.length > 0 && (
          <div key={distance} className="lap-table">
            <table>
              <thead>
                <tr>
                  <th>Finisher Position #</th>
                  <th>Finish Time</th>
                </tr>
              </thead>
              <tbody>
                {/* Reverse the laps array to display the latest lap at the top */}
                {laps.slice().reverse().map((lap, index) => (
                  <tr key={index}>
                    {/* Reverse the lap numbers as well */}
                    <td>{laps.length - index}</td>
                    <td>{lap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ))}
    </div>
  );
};


  return (
    <div className="App">
      <header className="App-header">
        <h1>Barkathon Official Time</h1>
        <div className="organizer-logos">
          <img src={petagonLogo} alt="Petagon" />
          <img src={ddlcLogo} alt="Davao Dog Lovers Community" />
          <img src={daugLogo} alt="Davao Agility Unified Group" />
          <img src={madayawLogo} alt="Madayaw Events" />
        </div>
      </header>
      <div className="stopwatches-container">
        {["1.5km", "3km", "5km"].map(distance => (
          <Stopwatch key={distance} raceDistance={distance} onAddLap={addLap} />
        ))}
      </div>
      {renderLapTables()}
    </div>
  );
}

export default App;
