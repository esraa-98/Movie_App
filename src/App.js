import {BrowserRouter, Route, Routes} from "react-router-dom";
import Favorite from "./pages/Favorite";
import MoviesDetails from "./pages/MoviesDetails";
import MoviesList from "./pages/MoviesList";
import NotFound from "./pages/NotFound";
import NavBar from "./components/Header/NavBar";
import SearchResults from "./pages/SearchResults";
import { useState } from "react";
import LangContext from "./context/lang";



function App() {
const [dLang,setDLang] = useState("en");

  

  return (
    <BrowserRouter>
      <LangContext.Provider value={{dLang,setDLang}}>
        <NavBar/>
        <Routes>
          <Route path={"/"} element = {<MoviesList/>}></Route>
          <Route path={"/movies/:id"} element = {<MoviesDetails/>}></Route>
          <Route path={"/favorite"} element = {<Favorite/>}></Route>
          <Route path={"/search/:query"} element = {<SearchResults/>}></Route>
          <Route path={"*"} element = {<NotFound/>}></Route>
        </Routes>
      </LangContext.Provider>
    </BrowserRouter>
    );
}

export default App;
