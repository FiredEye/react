import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/detail/MovieDetail";
import CategoryMovie from "./pages/CategoryMovie";
import SearchMovie from "./pages/SearchMovie";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='movie/:category' element={<CategoryMovie />} />
        <Route path='movie/detail/:id' element={<MovieDetail />} />
        <Route path='search/movie' element={<SearchMovie />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
