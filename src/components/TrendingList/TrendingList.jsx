import { Link } from "react-router-dom";
import s from "./TrendingList.module.css";

const TrendingList = ({ data }) => {
  return (
    <div>
      <ul className={s.list}>
        {data.map((item) => (
          <li key={item.id}>
            <Link className={s.list} to={`/movies/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TrendingList;
