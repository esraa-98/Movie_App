import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { favoritesManage } from '../../store/action/favoriteList';

export default function WatchListIcon({data}) {
    const [iconFilled,setIconFilled] = useState();
    const favList = useSelector((state) => state.fav.theFAvorites);
    const dispatch = useDispatch();

    useEffect(() => {
        setIconFilled(favList.some((movie) => (movie.id === data.id)))
    },[iconFilled])

    const handleIconClick = () => {
        if(favList.some((movie) => (movie.id === data.id)) === false){
            setIconFilled(true);

            let newList = favList;
            newList.push(data)
            dispatch(favoritesManage(newList));

        } else if (favList.some((movie) => (movie.id === data.id)) === true){
            setIconFilled(false);
            
            let filteredList = favList.filter((movie) => {
                return movie.id !== data.id;
            })
            dispatch(favoritesManage(filteredList));
        }
    };
  return (
    <i className={iconFilled? "bi bi-heart-fill text-warning col-5 mt-2 fs-2 text-end":"bi bi-heart col-5 mt-2 fs-2 text-end"} onClick={handleIconClick}></i>
  )
}
