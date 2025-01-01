import React from 'react'

export default function Contact() {
  return (
    
<section className='contact-section'>
<div className="contact-form">
  <h2 className="form-title">
    CONTACT ME
  </h2>
  <form>
    <input type="text" name="fullname" placeholder="Full name" required />
    <input type="email" name="email" placeholder="Email address" required />
    <input type="tel" name="phone" placeholder="Phone number" required />
    <textarea name="message" rows={4} placeholder="Message" required  />
    <button type="submit">Send</button>
  </form>
</div>
</section>
  )
}
