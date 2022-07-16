import Player from "./Player";

function PlayerList(props) {

  const players = props.playerData.map(player => {
    return (
      <Player
        key={player.gamerTag}
        gamerTag={player.gamerTag}
        firstName={player.firstName}
        lastName={player.lastName}
        wins={player.wins} />)
  });
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}
export default PlayerList;