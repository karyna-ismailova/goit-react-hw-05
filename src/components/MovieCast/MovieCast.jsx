import { useEffect, useState } from "react";
import s from "./MovieCast.module.css";
import { fetchCastById } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCastById(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <ul className={s.wrapper}>
        {cast.map((item) => (
          <li key={item.id}>
            {item.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                alt={item.name}
                width="100"
              />
            )}
            <h3>{item.name}</h3>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
