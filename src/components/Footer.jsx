import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <>
<footer className="footer">
  <div className="container-footer">
    <div className="footer-section">
      <h3>LOCATION</h3>
      <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
    </div>
    <div className="footer-section">
      <h3>AROUND THE WEB</h3>
      <div className="social-icons">
        <a href="#" className="icon-circle"> <i className="bi bi-facebook"></i></a>
        <a href="#" className="icon-circle">  <i className="bi bi-twitter"></i></a>
        <a href="#" className="icon-circle"> <i className="bi bi-linkedin"></i></a>
        <a href="#" className="icon-circle"> <i className="bi bi-globe"></i></a>
      </div>
    </div>
    <div className="footer-section">
      <h3>ABOUT FREELANCER</h3>
      <p>
        Freelancer is a free to use, MIT licensed Bootstrap theme created by < br /> <a href="#" className='footer-a'>Start Bootstrap</a>.
      </p>
    </div>
  </div>
</footer>


<footer className="simple-footer ">
  <div className="container text-center">
    <p className="mb-0">Copyright ©Your website 2023 </p>
  </div>
</footer>

</>


  )
}
