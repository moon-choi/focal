/*
FUNCTIONAL COMPONENT
CLASS BASED COMPONENT
*/

function Match(props) { //props: MatchList.js line 14,15,16,17 in return.
  return (
    <article className="Match">
      {console.log('Match.js', props)}

      <h1>{props.players[0]} <span>vs</span> {props.players[1]}</h1>

      {props.wins && <h2>{props.winner} is the winner by {props.scoreDifference}!</h2>}
      {!props.wins && <h2>No winners yet!</h2>}
    </article>
  );
}
export default Match;