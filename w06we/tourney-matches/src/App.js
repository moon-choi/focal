import "./App.css";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import playerData from './data/playerData';
import matchData from './data/matchData';
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers";

function App() {
  //normalize the data, feed the data to meet our necessities.
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers
    (playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      {/* children of App.js */}
      <PlayerList playerData={parsedPlayerData} />
      <MatchList matchData={matchData} />
    </div>
  );
}

export default App;