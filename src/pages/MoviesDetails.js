import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LangContext from "../context/lang";
import axiosInstance from "../api/axiosInstance";
import WatchListIcon from "../components/WatchListIcon/WatchListIcon";
import { Rating } from "primereact/rating";
import Recommendation from "../components/Recommendation/Recommendation";

export default function MoviesDetails() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const { dLang, setDLang } = useContext(LangContext);

  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}?language=${dLang}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dLang]);

  return (
    <div className="container my-5">
      <div
        className="card mx-auto row"
        style={{ width: "75%", height: "600px" }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          className="col-6 h-100 px-0"
          alt={details.title}
        />
        <div className="col-6 px-0">
          <div className="card-body">
            <h5 className="card-title fs-2 d-flex justify-content-between mb-5">
                {details.title} 
                <span><WatchListIcon key={details.id} data={details} /></span></h5>
            <p className="card-text">{details.overview}</p>
          </div>
          <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex">
              <Rating
                className="d-flex text-warning"
                value={details.vote_average}
                readOnly
                cancel={false}
              /><span className="ms-3">{details.vote_count}</span>
            </li>
            <li className="list-group-item">
             <strong> Original language: </strong>{details.original_language}
            </li>
            <li className="list-group-item">
            <strong> Release date:</strong> {details.release_date}
            </li>
          </ul>
        </div>
      </div>
      <Recommendation movies={params}/>
    </div>
  );
}
