import { useEffect, useState } from "react";
import TrendingList from "../../components/TrendingList/TrendingList";
import { trendingMovies } from "../../services/api";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const trends = await trendingMovies();
        setTrends(trends);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <div>
        <h2 className={s.title}>Tranding today</h2>
        <TrendingList data={trends} />
      </div>
    </div>
  );
};
export default HomePage;
