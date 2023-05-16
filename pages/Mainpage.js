import React from 'react'

const Mainpage = () => {
  return (
    <div>
      <section id='home'>
          <h1 className='text-center'>ORGANIC SPICES</h1>
          <p>We are one of the most reliable and consistent Organic Spices Manufacturers and Exporters in Sri Lanka</p>
          <div className='input-group'>
               <input type='text' className='form-control' placeholder='Email Address'></input>
               <button className='btn signin'>Get Started</button>
          </div>
      </section>
    </div>
  )
}

export default Mainpage
