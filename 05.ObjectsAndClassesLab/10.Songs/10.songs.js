function solve(input) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let numberOfSongs = Number(input.shift());
  let typeSong = input.pop();

  for (let line of input) {
    let [type, name, time] = line.split("_");
    let song = new Song(type, name, time);
    songs.push(song);
  }

  if (typeSong === "all") {
    songs.forEach((s) => console.log(`${s.name}`));
  } else {
    let filtered = songs.filter((s) => s.type === typeSong);
    filtered.forEach((s) => console.log(`${s.name}`));
  }
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
