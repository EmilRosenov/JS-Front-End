function moviesInfo(input) {
  let movieList = [];

  for (let line of input) {
    if (line.includes("addMovie")) {
      let name = line.split("addMovie ")[1];
      addMovie(name);
    } else if (line.includes("directedBy")) {
      let name = line.split(" directedBy ")[0];
      let director = line.split(" directedBy ")[1];
      addDirector(name, director);
    } else if (line.includes("onDate")) {
      let name = line.split(" onDate ")[0];
      let date = line.split(" onDate ")[1];
      addDate(name, date);
    }
  }

  for (const movie of movieList) {
    if (
      movie.hasOwnProperty("name") &&
      movie.hasOwnProperty("date") &&
      movie.hasOwnProperty("director")
    ) {
      console.log(JSON.stringify(movie));
    }
  }

  function addMovie(name) {
    movieList.push({ name });
  }

  function addDirector(name, director) {
    let movie = movieList.find((m) => m.name === name);

    if (movie) {
      movie.director = director;
    }
  }

  function addDate(name, date) {
    let movie = movieList.find((m) => m.name === name);
    if (movie) {
      movie.date = date;
    }
  }
}

moviesInfo([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
