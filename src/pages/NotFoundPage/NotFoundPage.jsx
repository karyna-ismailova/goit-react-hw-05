import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Page is not found</h2>
      <p>
        Go back to{" "}
        <Link className={s.btn} to="/">
          Home
        </Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
