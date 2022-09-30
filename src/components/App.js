import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
  const [movies, setMovies] = useState({
    1: { id: 1, title: "A River Runs Through It",video_url: "https://www.youtube.com/watch?v=OsIolBViUmc" },
    2: { id: 2, title: "Se7en", video_url: "https://www.youtube.com/watch?v=OsIolBViUmc" },
    3: { id: 3, title: "Inception", video_url: "https://www.storyblocks.com/video/search/short+clip" },
  });
  
  return (
    

    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <MoviesPage movies={movies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
