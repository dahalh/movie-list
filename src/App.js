import { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/card/CustomCard";
import { SearchForm } from "./components/form/SearchForm";
import { fetchMovie } from "./components/helpers/axiosHelper";
import { MovieList } from "./components/movie-list/MovieList";
import { Title } from "./components/title/Title";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});

  const getMovie = async (search) => {
    const movie = await fetchMovie(search);

    setMovie(movie.data);
  };

  const handleOnAddToList = (cat, movie) => {
    const obj = { ...movie, cat };

    // adding movie the first time
    !movieList.length && setMovieList([obj]);

    const isExist = movieList.find((item) => item.imdbID === movie.imdbID);

    if (!isExist) {
      setMovieList([...movieList, obj]);
      setMovie({});
    } else {
      alert("Movie already in list");
    }
  };

  const handleOnDelete = (imdbID) => {
    const filteredList = movieList.filter((item) => item.imdbID !== imdbID);
    setMovieList(filteredList);
    // console.log(imdbID);
  };

  console.log(movieList);
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm handleOnAddToList={handleOnAddToList} getMovie={getMovie} />

        <div className="d-flex justify-content-center">
          {movie.Response === "True" && (
            <CustomCard movie={movie} fun={handleOnAddToList} />
          )}
          {movie.Response === "False" && (
            <Alert variant="danger"> {movie.Error}</Alert>
          )}
        </div>

        <hr />
        <MovieList movieList={movieList} handleOnDelete={handleOnDelete} />
      </Container>
    </div>
  );
};

export default App;
