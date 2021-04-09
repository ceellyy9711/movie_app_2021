import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({year, title, summary, poster, genres}){
    return <div className="movie">
        <div className="movie_data">
            <img src={poster} alt={title} title={title} />
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">
                {genres.map((genre, index) => (     //index 대신에 다른 단어 써도 됨. 자동으로 id매겨줌
                    <li key={index} className="genres_genre">{genre}</li>
                ))}
            </ul>
            <p className="movie_summary">{summary.slice(0, 180)}...</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;