import { lazy, Suspense } from "react";
import Navigation from "./Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage/HomePage";
// import MoviesPage from "../pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./MovieCast/MovieCast";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Loader from "./Loader/Loader";
// import MovieReviews from "./MovieReviews/MovieReviews";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
