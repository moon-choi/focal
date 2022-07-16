import Match from "./Match";
//childeren component: Match. 
function MatchList(props) {
  //props -> matchData={matchData} in APP.JS LINE 21.
  //props: attribute of that child.  
  //APP.JS : Direct parent of MatchList.js

  //only parent component can pass 
  console.log('MatchList Props', props)
  const matches = props.matchData.map((match) => {
    //map: go through all in array, in each iteration, we will work with the object in the iteration
    return (
      <Match
        key={match.matchNumber}
        players={match.players}
        winner={match.winner}
        scoreDifference={match.scoreDifference}
      />)
  });

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );

};

export default MatchList;