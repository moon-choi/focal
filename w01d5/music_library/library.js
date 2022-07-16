const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (const key in library) {
    if (key === "playlists") {
      const pls = library.playlists;
      for (const pl in pls) {
        console.log(`${pl}: ${pls[pl].name} - ${pls[pl].tracks.length} tracks`);
      }
    }
  }
};

printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (const key in library) {
    if (key === "tracks") {
      const ts = library.tracks;
      for (const t in ts) {
        console.log(`${t}: ${ts[t].name} by ${ts[t].artist} (${ts[t].album})`);
      }
    }
  }
};

printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const pls = library.playlists;
  let tArr = [];

  for (const pl in pls) {
    if (pl === playlistId) {
      tArr = pls[pl].tracks;
      console.log(`${pl}: ${pls[pl].name} - ${pls[pl].tracks.length} tracks`);
    }
  }

  const ts = library.tracks;
  for (const t in ts) {
    for (let i = 0; i < tArr.length; i++) {
      if (t === tArr[i]) {
        console.log(`${t}: ${ts[t].name} by ${ts[t].artist} (${ts[t].album})`);
      }
    }
  }
};
printPlaylist('p01');

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  for (const key in library) {
    if (key === "playlists") {
      const pls = library.playlists;
      for (const pl in pls) {
        if (pl === playlistId) {
          pls[pl].tracks.push(trackId);
        }
      }
    }
  }
};

addTrackToPlaylist('t04', 'p01');

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const Uid = generateUid();

// adds a track to the library
const addTrack = function(name, artist, album) {
  const tId = "t" + Uid;
  library.tracks[tId] = { id: tId, name: name, artist: artist, album: album };
};

addTrack("Levitating", "Dua Lipa", "Future Nostalgia");

// adds a playlist to the library
const addPlaylist = function(name) {
  const pId = "p" + Uid;
  library.playlists[pId] = { id: pId, name: name, tracks: [] };
};
addPlaylist("moon");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {};
