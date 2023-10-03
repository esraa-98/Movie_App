import React, { useContext, useEffect, useState } from "react"
import {useLocation, useParams} from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import MovieCard from "../components/MovieCard/MovieCard";
import LangContext from "../context/lang";
import Search from "../components/Search/Search";
import '../components/Search/Search.css'
export default function SearchResults(){

    const params = useParams();
    const location = useLocation();
    const [resultList,setResultList] = useState([]);
    const [currentBage,setCurrentBage] = useState(location.state? location.state:1);
    const [totalBages,SetTotalPages]  = useState(1);
    const {dLang,setDLang} = useContext(LangContext);
  
    useEffect(() => {
        axiosInstance.get(`/search/movie?query=${params.query}&page=${currentBage}&language=${dLang}`)
                .then((res) => {console.log(res);
                                setResultList(res.data.results);
                                SetTotalPages(res.data.total_pages);})
                .catch((err) => {console.log(err)});
                console.log("searchResult")
    }, [params.query,currentBage,dLang]);

    const hadlePrevious = () => {
        if (currentBage > 1){
            setCurrentBage(currentBage - 1)
            console.log(currentBage)
        }
    };

    const handleNext = () => {
        if (currentBage < totalBages ){
            setCurrentBage(currentBage + 1)
            console.log(totalBages);
            console.log(currentBage)
        }
    }

    return(
        <div className="container my-5">
            <div className="my-5">
              <Search result={params.query}/>
            </div>
            <h3 className="mb-5">Search results of <span className="text-success">{params.query}</span></h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {resultList.map((movie) => {
                   return <div key={movie.id} className="col-md-4 my-3">
                                <MovieCard movieData = {movie} moviePage = {currentBage} backTo = {`/search/${params.query}`}/>
                            </div>
                })}
            </div>

            <nav className="d-flex justify-content-center" aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="btn btn-warning me-2" onClick={hadlePrevious} aria-label="Previous">
                            <span aria-hidden="true">Prev</span>
                        </button>
                    </li>
                    <li className="page-item"><button className="btn btn-warning">{currentBage}</button></li>
                    <li className="page-item">
                        <button className="btn btn-warning ms-2" onClick={handleNext} aria-label="Next">
                            <span aria-hidden="true">Next</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}