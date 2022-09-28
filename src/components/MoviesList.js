import React from "react";
import { Link } from "react-router-dom";
function MoviesList({movies}) {
    const renderMovies = Object.keys(movies).map((movieID) =>(
        <li key={movieID}>
<Link to={`/movies/${movieID}`}>
    {movies[movieID].tittle}</Link>
        </li>
    ));
    return <ul>{renderMovies}</ul>
}
export default MoviesList;