import './App.css';
import {Stopwatch} from './Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Petagon Dog Summer Festival - Barkathon Stopwatches</h1>
        <Stopwatch raceDistance="1.5km" />
        <Stopwatch raceDistance="3km" />
        <Stopwatch raceDistance="5km" />
      </header>
    </div>
  );
}

export default App;
