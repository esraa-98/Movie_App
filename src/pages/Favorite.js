import React from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Favorite (){

    const favList = useSelector((state) => state.fav.theFAvorites);

    if (favList.length === 0){
        return(
            <>
            <div className="row mb-5">
                 <h2 className="ms-5 mt-4 fs-1 fw-bold">Watchlist</h2>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5">
                <div className="text-center">
                    <div className="alert alert-warning p-5">
                    <span className="fs-1"><FontAwesomeIcon icon={faStar}/></span>
                    <h2 className="fw-bold fs-1 mt-2">You haven't any Favorites yet!</h2>
                    </div>
                    
                    <Link to="/" className="btn btn-warning btn-lg px-5 py-3">Back to Movies</Link>
                </div>
            </div>
            </>
        ) 

    }else {
        return(
            <>
            <div className="row mb-5">
                 <h2 className="ms-5 mt-4 fs-1 fw-bold">WatchList</h2>
               </div>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {favList.map((movie) => {
                    return <div key={movie.id} className="col-md-4 my-3">
                                    <MovieCard movieData = {movie} backTo = "/favorite"/>
                                </div>
                    })}
                </div>
            </div>
            </>
        )
    }
}