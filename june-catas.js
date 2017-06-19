// return item of array[goose]
function duckDuckGoose(players, goose) {
  // ...
  console.log(players, 'goose: ', goose);
  let index;
  if(players.length >= goose) {
    index = goose - 1;
  } else if(players.length < goose) {
    if(goose % players.length === 0) {
      index = players.length - 1;
    } else {
      index = goose % players.length - 1;
    }
  }
  // let index = players.length >= goose ? goose-1 : (players.length % goose) - 1;
  console.log(index);
  return players[index].name;
}

// duckDuckGoose(players, 18);