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
  const [movieMainList, setMovieMainList] = useState([]);
  const [movie, setMovie] = useState({});

  const getMovie = async (search) => {
    const movie = await fetchMovie(search);

    setMovie(movie.data);
  };

  const handleOnAddToList = (cat, movie) => {
    const obj = { ...movie, cat };
    // adding movie the first time
    !movieList.length && setMovieList([obj]) && setMovieMainList([obj]);
    // adding after first time
    const isExist = movieList.find((item) => item.imdbID === movie.imdbID);
    if (!isExist) {
      setMovieList([...movieList, obj]);
      setMovieMainList([...movieMainList, obj]);
      setMovie({});
    } else {
      alert("Movie already in list");
    }
  };

  const handleOnDelete = (imdbID) => {
    const filteredList = movieMainList.filter((item) => item.imdbID !== imdbID);
    setMovieList(filteredList);
    setMovieMainList(filteredList);
    // console.log(imdbID);
  };

  const handleOnSelect = (cat) => {
    let filterArgs = [];
    if (cat) {
      filterArgs = movieMainList.filter((itm) => itm.cat === cat);
    } else {
      filterArgs = movieMainList;
    }
    setMovieList(filterArgs);
    // happy selected
    // lazy selected
    // all selected
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
        <MovieList
          movieList={movieList}
          handleOnDelete={handleOnDelete}
          handleOnSelect={handleOnSelect}
        />
      </Container>
    </div>
  );
};

export default App;
