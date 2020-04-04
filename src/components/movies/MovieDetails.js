import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';





function MovieDetails() {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    async function getMovieById(id) {
        const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies/' + id);
        setMovie(res.data);
    }

    useEffect(() => {
        getMovieById(movieId);
    }, [movieId]);

    if (movie) {
        console.log(movie);
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-9 bg-dark">
                            <Link to="/" className="text-white">FULL CAST AND CREW |</Link>
                            <Link to="/" className="text-white pl-2">TRIVIA |</Link>
                            <Link to="/" className="text-white pl-2">USER REVIEWS |</Link>
                            <Link to="/" className="text-white pl-2">IMDbPro |</Link>
                            <Link to="/" className="text-white pl-2">MORE </Link>
                            <Link to="/" className="text-white pl-2 float-right">SHARE </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 text-white bg-dark">
                            <h3> {movie.Title}</h3>
                        </div>
                        <div className="col-1 bg-dark  pt-2 border-right">
                            <FontAwesomeIcon className="float-right text-warning" icon={faStar} size="2x" />
                        </div>
                        <div className="col-1 bg-dark text-white ">
                            {movie.imdbRating} <br />
                            <Link to="/" className="text-white"><small>{movie.imdbVotes}</small></Link>
                        </div>
                        <div className="col-1 bg-dark pt-2 ">
                            <Link to="/" className="text-white"><FontAwesomeIcon icon={faStar}
                                size="2x" /><span>Rate This</span></Link>
                        </div>
                        <div className="col-9 bg-dark text-white">
                            PG | {movie.Runtime} | {movie.Genre} | {movie.DVD}
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-6 bg-dark">
                            <img src={movie.Poster}
                                alt="" />
                        </div>
                        <div className="col-3 bg-dark">
                            <iframe width="440" height="330" src="" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            {movie.Plot}
                        </div>
                        <div className="col-8">
                            Director: <Link to="/" className="">{movie.Director} </Link>
                        </div>
                        <div className="col-8">
                            Writers: <Link to="/" className="">{movie.Writer} </Link>
                        </div>
                        <div className="col-8">
                            Stars: <Link to="/" className="">{movie.Actors} </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <h1>Loading ...</h1>;
    }
}

export default MovieDetails;