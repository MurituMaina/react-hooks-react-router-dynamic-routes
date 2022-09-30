import React from 'react'
import { Link } from 'react-router-dom';



export default function MoviesList({movies}) {
    let movieList =Object.keys(movies).map((movieID) =>(
    <li key={movieID}>
        <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ))
   
//   let movie= movieList.map(movie)=>{
//     <li>{movie}</li>
//   })
    return (
    <div>
      <p>Hello</p>
      <ul>
        {movieList}
        {/* <li></li> */}
      </ul>
    </div>
  )
}
