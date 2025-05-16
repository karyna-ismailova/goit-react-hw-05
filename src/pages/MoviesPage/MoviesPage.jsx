import toast, { Toaster } from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovies } from "../../services/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovies(query);
        setMovies(data);
        if (data.length === 0 && query !== "") {
          setNotFound(true);
          toast.error("Not found");
        } else {
          setNotFound(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  const handleChangeQuery = (newValue) => {
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };

  const filteredData = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <MovieList data={filteredData} />
    </div>
  );
};
export default MoviesPage;
