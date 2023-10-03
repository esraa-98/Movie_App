import React from 'react'
import Search from '../Search/Search'
import './SearchHeroSection.css'
export default function SearchHeroSection() {
  return (
    <div className="container-fluid py-5 mt-3 rounded hero-bg mb-5">
    <div className="row align-items-center justify-content-center py-5">
      <div className="col-12">
        <h2 className="mb-5 px-4">
          Welcome To Our Movie App
        </h2>
        <p className="mb-4 px-4">
          Millions of Movies And Tv Shows To discover , Explore Now
        </p>
          <Search/>
      </div>
    </div>
  </div>
  )
}
