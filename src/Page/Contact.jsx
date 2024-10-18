import React from 'react'
import image1 from '../Images/Transport.jpg'
const Contact = () => {
  return (
    <section id='contact'>
      <div className="container-fluid vh-100" style={{backgroundImage:`url(${image1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className="row d-flex justify-content-center">
                <div className="col-md-8 text-white m-5 d-flex flex-column align-items-center">
                    <h1 className='display-1 fw-bold'>Contact Us</h1>
                    <h5>See our Daily News & Update</h5>
                </div>
            </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row">
          <div className="col-md-8" style={{backgroundColor:'#2d313d'}}>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 d-flex justify-content-center">
                <h3 className='text-white display-4 fw-bold'>Get in Touch</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row my-md-4 my-2">
                  <div className="col-md-6 my-1 my-md-0">
                    <input type="text" className='form-control' placeholder='FirstName' />
                  </div>
                  <div className="col-md-6 mt-1 mb-0 my-md-0">
                    <input type="text" className='form-control' placeholder='LastName' />
                  </div>
                </div>
                <div className="row my-md-4 my-2">
                  <div className="col">
                  <input type="email" className='form-control' placeholder='@gmail.com' />
                  </div>
                </div>
                <div className="row my-md-4 my-2">
                  <div className="col">
                  <input type="text" className='form-control' placeholder='Subject' />
                  </div>
                </div>
                <div className="row my-md-4 my-2">
                  <div className="col">
                  <textarea className="form-control" placeholder="Enter Message" rows="7" cols="14"></textarea>
                  </div>
                </div>
                <button type='button' style={{color:'white',backgroundColor:'#eb5b33'}} className='p-3 border-0 mt-lg-3 mt-md-5 mb-2 w-lg-auto w-100 fw-bold'>Send Message</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ps-md-5 ps-3">
            <h3 style={{color:'#eb5b33'}} className='mt-3'>Address</h3>
            <p className='fs-4 lh-sm'>203 Fake St. Mountain View, San Francisco, California, USA</p>
            <h3 style={{color:'#eb5b33'}} className='mt-3'>Phone</h3>
            <p className='fs-4 lh-sm'>+12-3456789</p>
            <h3 style={{color:'#eb5b33'}} className='mt-3'>Email Address</h3>
            <p className='fs-4 lh-sm'>Logistic2024@gamil.com</p>
            <h3 className='mt-5'>More Info?</h3>
            <p className='fs-4 text-muted lh-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur sequi dolorum impedit maiores ad sint.</p>
            <button type='button' style={{color:'white',backgroundColor:'#eb5b33'}} className='p-3 border-0 mt-md-0 mb-md-4 mt-0 mb-2 fw-bold '>Learn More</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact
