import React from 'react'

export default function About() {
  return (

  <section className="about-section py-5 text-center ">
  <div className="container">
    <h2 className="fw-bold ">ABOUT</h2>
 
    <div className="row justify-content-center mt-4 about-content">
      <div className="col-md-5 par-about">
        <p>
          Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
      <div className="col-md-5 par-about">
        <p>
          You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
        </p>
      </div>
    </div>
    <button className=" btn btn-outline-light  mt-4 px-4 py-2">
    <i /> Free Download!
    </button>
  </div>
</section>

  )
}
