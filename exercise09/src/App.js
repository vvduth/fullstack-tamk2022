import MoviesList from "./components/MoviesList";
import "./App.css";

const App = () => {
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      openingText: "A long time ago...",
      releaseDate: "1977-05-25",
    },
    {
      id: 2,
      title: "Movie 2",
      openingText: "An even longer time ago...",
      releaseDate: "1999-05-19",
    },
  ];

  return (
    <>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
};

export default App;
