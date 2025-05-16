import { useEffect, useRef, useState } from "react";
import s from "./MovieDetailsPage.module.css";
import { trendingMoviesById } from "../../services/api";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  // const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await trendingMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <Link className={s.backBtn} to={goBackRef.current}>
        Return back
      </Link>
      {/* <button className={s.backBtn}>Return back</button> */}
      <div className={s.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          width="260"
        />
        <div className={s.description}>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres?.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div className={s.add}>
        <p>Additional Information</p>
        <nav className={s.list}>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetailsPage;
