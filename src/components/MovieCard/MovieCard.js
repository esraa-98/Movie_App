import React from "react";
import { useNavigate } from "react-router-dom";
import WatchListIcon from "../WatchListIcon/WatchListIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard({ movieData, moviePage, backTo }) {
  const navigate = useNavigate();

  return (
    <div className="card h-100" style={{ width: "20rem" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
        className="card-img-top"
        height="420px"
        alt={movieData.title}
      />
      <div className="card-body row">
        <div className="col-12">
          <h5 className="card-title">{movieData.title}</h5>
          <p className="card-text">{movieData.release_date}</p>
          <div className="row">
            <p className="col-3">
            <span className="me-1"><FontAwesomeIcon icon={faStar}/></span>{movieData.vote_average}
            </p>
            <p className="col-9">Votes: {movieData.vote_count}</p>
          </div>
        </div>
        <div className="col-12 align-self-end row justify-content-between">
          <button
            onClick={() => {
              navigate(`/movies/${movieData.id}`, {
                state: { moviePage, backTo },
              });
            }}
            className="btn btn-warning col-6"
          >
            More Details
          </button>
          <WatchListIcon data={movieData} />
        </div>
      </div>
    </div>
  );
}
