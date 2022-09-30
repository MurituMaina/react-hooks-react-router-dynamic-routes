import React from 'react'
import { useParams } from 'react-router-dom';

function MoviesShow({movies}) {
    const params = useParams();
    console.log(params);
    console.log(movies);
  return (
    <div>
     {/* And here we access the `movieId` stored in `params` to render 
        information about the selected movie */}
      <h3>Movies Show Component!</h3>
      <h3>{movies[params.movieId].title}</h3>
      <video width="320" height="240" controls>
  <source src={movies[params.movieId].video_url} />
  
  Your browser does not support the video tag.
</video>
      {/* <h3>{movies[3.1].title}</h3> */}
    </div>
  )
}

export default MoviesShow;