import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { fetchReviewsById } from "../../services/api";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchReviewsById(movieId);

        setReviews(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }
  return (
    <div className={s.review}>
      <ul className={s.wrapper}>
        {reviews.map((item) => (
          <li className={s.comment} key={item.id}>
            <h4 className={s.author}>Author: {item.author}</h4>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieReviews;
