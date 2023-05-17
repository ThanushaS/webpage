import React from 'react'

const Contact = () => {
  return (
  
     <section id="contact">
     <div className="container box">
  <div class="row ">
    <div className="col-lg-6 col-md-6 col-12 ">
    <img src="R1.jpg" className='img-fluid'/>
    </div>
    <div className="col-lg-6 col-md-6 col-12">
      <h1>CONTACT US</h1>
      <form className='mb-3'>
          <input type="text" className='form-control' placeholder='Enter your name'/>
          <input type="email" className='form-control' placeholder='Enter your email'/>
          <textarea className='form-control' placeholder='Enter your message'></textarea>
          <button className='btn signin'>Send Message</button>
      </form>
    </div>
  </div>
          </div>
     </section>
   
  )
}

export default Contact