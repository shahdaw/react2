import React from 'react'
import cabin from "../assets/images/cabin.png"
import cake from "../assets/images/cake.png"
import circus from "../assets/images/circus.png"
import game from "../assets/images/game.png"
import safe from "../assets/images/safe.png"
import submarine from "../assets/images/submarine.png"

export default function Portfolio() {
  return (

  <section className="portfolio py-5">
  <div className="container text-center">
    <h2 className="mb-3 fs-1 fw-bold">PORTFOLIO</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="portfolio-item ">
          <img src={cabin} />
        </div>
      </div>
      <div className="col-md-4">
        <div className="portfolio-item ">
          <img src={cake} />
        </div>
      </div>
      <div className="col-md-4">
        <div className="portfolio-item ">
          <img src={circus} />
        </div>
      </div>
      <div className="col-md-4">
        <div className="portfolio-item ">
          <img src={game} />
        </div>
      </div>
      <div className="col-md-4">
        <div className="portfolio-item ">
          <img src={safe} />
        </div>
      </div>
      <div className="col-md-4">
        <div className="portfolio-item ">
          <img src={submarine} />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
