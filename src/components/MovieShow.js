import React from "react";
import {useParams} from "react-router-dom"
function MovieShow({movies}) {
    const params = useParams();
    console.log(params);
  return (
    <div>
      <h3>{movies[params.movieID].tittle}</h3>
    </div>
  );
}

export default MovieShow;