import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import getMovieList from "../../store/action/recommendation";
import LangContext from "../../context/lang";
import MovieCard from "../MovieCard/MovieCard";
import RecommendationCard from "../RecommendationCard/RecommendationCard";

export default function Recommendation({movies}) {
    const location = useLocation();

    const myMovieList = useSelector((state) => state.movs.list);
    console.log(myMovieList)
    const dispatch = useDispatch();
    const [currentBage,setCurrentBage] = useState(location.state? location.state:1);
    const [totalBages,SetTotalPages]  = useState(1);

    const {dLang,setDLang} = useContext(LangContext)
    useEffect(()=>{
        dispatch(getMovieList({
            page: currentBage,
            language: dLang,
            id: movies.id
        }));
        SetTotalPages(myMovieList.total_pages)
    },[currentBage, dLang, myMovieList]);
  return (
    <>
     <div className="container mt-5 py-5">
     <div className="row mb-5">
        <h2 className="fs-1 fw-bold">Recommendations</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
                {myMovieList.results && myMovieList.results.map((movie,index) => {
                  if (index % 9 === 0) {return  <div key={movie.id} className="col-md-4 my-3">
                    <RecommendationCard movieData={movie}/>
                   </div>}
                   else
                   {return null}
                })}
            </div>

     </div>
    </>
  );
}
