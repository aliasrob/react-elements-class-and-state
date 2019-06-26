import React from "react";
import ReactDOM from "react-dom";

const seed = [
  {
    id: "tt0117705",
    name: "Space Jam",
    year: 1996,
    votes: 5,
    cover:
      "https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
  },
  {
    id: "tt0158811",
    name: "Muppets from Space",
    year: 1999,
    votes: 3,
    cover:
      "https://m.media-amazon.com/images/M/MV5BODI2Zjc5YzMtNzQ1NS00NGVmLWExYzgtMzFlY2NiMGMzZjRjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
  },
  {
    id: "tt0062622",
    name: "2001: A Space Odyssey",
    year: 1968,
    votes: 1,
    cover:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  }
];

function Header() {
  return (
    <header>
      <h1>The Starry Theater</h1>
      <p className="subheading">
        The best <strong>drive-in theater</strong> around the block.
      </p>
    </header>
  );
}

function Movie(props) {
  return (
    <article>
      <h3>{props.name}</h3>
      <div className="year">Released on {props.year}</div>
      <button
        id={props.id}
        onClick={evt => {
          console.log(evt.target);
        }}
      >
        +1 vote
      </button>
      <img alt={`Poster for ${props.name}`} src={props.cover} />
    </article>
  );
}

function MovieList() {
  return (
    <React.Fragment>
      <h2>Now playing</h2>
      <section>
        {seed.map(function(item) {
          return <Movie {...item} key={item.id} />;
        })}
      </section>
    </React.Fragment>
  );
}

function Homepage() {
  return (
    <React.Fragment>
      <Header />
      <MovieList />
    </React.Fragment>
  );
}

class MovieApp extends React.Component {
  state = {
    films: [].concat(seed)
  };

  handleClick = event => {
    // const clickedFilmId = 0;
    // const setStateCallback = function(prevState) {
    //   const newFilms = prevState.films.map(function(film) {
    //     if (film.id === clickedFilmId) {
    //       return Object.assign({}, film, { votes: film.votes + 1 });
    //     } else {
    //       return film;
    //     }
    //   });

    //   const sortedFilms = newFilms.sort((a, b) => b.votes - a.votes);

    //   return { films: sortedFilms };
    // };

    this.setState();
  };

  render() {
    return <Homepage films={this.state.films} />;
  }
}

const target = document.getElementById("app");
ReactDOM.render(<MovieApp />, target);
