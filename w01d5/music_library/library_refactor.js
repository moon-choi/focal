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

  printPlaylists: function() {
    for (const key in this) {
      if (key === "playlists") {
        const pls = this.playlists;
        for (const pl in pls) {
          console.log(
            `${pl}: ${pls[pl].name} - ${pls[pl].tracks.length} tracks`
          );
        }
      }
    }
  },

  printTracks: function() {
    for (const key in this) {
      if (key === "tracks") {
        const ts = this.tracks;
        for (const t in ts) {
          console.log(
            `${t}: ${ts[t].name} by ${ts[t].artist} (${ts[t].album})`
          );
        }
      }
    }
  },

  printPlaylist: function(playlistId) {
    const pls = this.playlists;
    let tArr = [];

    for (const pl in pls) {
      if (pl === playlistId) {
        tArr = pls[pl].tracks;
        console.log(`${pl}: ${pls[pl].name} - ${pls[pl].tracks.length} tracks`);
      }
    }

    const ts = this.tracks;
    for (const t in ts) {
      for (let i = 0; i < tArr.length; i++) {
        if (t === tArr[i]) {
          console.log(
            `${t}: ${ts[t].name} by ${ts[t].artist} (${ts[t].album})`
          );
        }
      }
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    for (const key in this) {
      if (key === "playlists") {
        const pls = this.playlists;
        for (const pl in pls) {
          if (pl === playlistId) {
            pls[pl].tracks.push(trackId);
          }
        }
      }
    }
  },

  addPlaylist: function(name) {
    const pId = "p" + Uid;
    this.playlists[pId] = { id: pId, name: name, tracks: [] };
  },

  addTrack: function(name, artist, album) {
    const tId = "t" + Uid;
    this.tracks[tId] = { id: tId, name: name, artist: artist, album: album };
  },
};

const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const Uid = generateUid();

library.printPlaylists();

library.printTracks();

library.printPlaylist("p01");

library.addTrackToPlaylist("t04", "p01");

library.addTrack("Levitating", "Dua Lipa", "Future Nostalgia");

library.addPlaylist("moon");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {};
