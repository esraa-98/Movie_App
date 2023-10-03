import axiosInstance from "../../api/axiosInstance";

export const GET_RECOMMEND_LIST = "GET_RECOMMEND_LIST"

const getMovieList = (props) => (dispatch) => {
    return axiosInstance.get(`/movie/${props.id}/recommendations?page=${props.page}&language=${props.language}`).then((res) => {
        dispatch({
            type: GET_RECOMMEND_LIST,
            payload: res.data
        })
    }).catch((err) =>{
        console.log(err);
    })
}


export default getMovieList;