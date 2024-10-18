import React, { useState } from 'react'
import image from '../Images/images.png'
import image1 from '../Images/Logistics.jpg'
import image2 from '../Images/wholesale.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  const [expand,setExpand]=useState(false)
    const handleExpand=()=>{
        setExpand(!expand)
    }
  return (
    <section id='about'>
      <div className="container-fluid vh-100" style={{backgroundImage:`url(${image1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='header'>
      <div className="row" id='header'>
                <div className="col-12 text-white m-5" id='headercol'>
                    <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold'>About us</h3>
                    </div>
                    <h1 className='display-1 fw-bold'>TRANSPORTATION
                    & LOGISTICS</h1>
                    <h5 className='me-5'>Vivamus Mangna justo, lacinia eget consectetur sed, convellis at tellus, Quisque velit nisi
                    pretium ut lacinia in, elementum id enim. nulla quis lorem ut libero</h5>
                </div>
            </div>
      </div>
      <div className="container">
      <div className="row mt-md-5 mt-3">
                    <div className="col-lg-10 col-12">
                    <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold' style={{color:'#FF5E18'}}>About Us</h3>
                    </div>
                    <hr style={{backgroundColor:'#eb5b33',width:'80px',height:'5px',border:'3px solid #eb5b33'}} className='m-0 ms-5' />
                    </div>
                </div>
      <div className="row">
        <div className="col-md-8 order-md-1 order-2">
          <p className='fs-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero eos ipsam voluptas.</p>
          <p className='text-muted fs-3'>Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam laborum quo obcaecati similique iusto delectus quasi!{expand && (<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, rem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus quisquam fuga illo possimus error fugit accusamus facilis quaerat laboriosam!</>)}</p>
          <Link to="/about" className='fw-bold fs-3' onClick={handleExpand} style={{color:'#eb5b33'}}>{expand?'Read Less':"Read More"}</Link>
          <div className='my-md-5 my-3'>
          <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Apartments frequently or motionless.</p>
            </div>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Voluptatem quia voluptas sit aspernatur.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 order-md-2 order-1">
          <img src={image2} alt="About" style={{borderRadius:'50%',width:'500px',height:'500px'}} className='img-fluid' />
        </div>
      </div>
      </div>
      <div className="container-fluid mb-5" style={{backgroundImage:`url(${image2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className="row mt-md-5 mt-3 d-flex justify-content-center">
                    <div className="col-lg-10 d-flex flex-column align-items-center col-12">
                    <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'40px', height:'40px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold text-white display-6'>How Its Work</h3>
                    </div>
                    <hr style={{backgroundColor:'white',width:'80px',height:'5px',border:'3px solid #eb5b33'}} className='m-0 ms-5' />
                    </div>
                </div>
      <div className="row d-flex justify-content-around my-md-5 my-3">
       <div className="col-lg-4 d-flex flex-column align-items-center">
       <div id='circlepadding' style={{backgroundColor:'white', borderRadius:'50%'}} className="col-lg-3 col-md-2 col-sm-4 p-1"><h3 style={{backgroundColor:'#eb5b33', borderRadius:'50%'}} className="p-lg-3 p-md-2 p-3 text-center m-md-2 m-1 pt-2 pb-2">1</h3></div>
       <h3 className='text-white mt-3'>Make an Order</h3>
       <p className='fs-3 text-white mt-3'>Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam labor quo obcaecati similique iusto</p>
       <div className='mt-3 text-white'>
       <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Apartments frequently or motionless.</p>
            </div>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Voluptatem quia voluptas sit aspernatur.</p>
            </div>
       </div>
       </div>
       <div className="col-lg-4 d-flex flex-column align-items-center">
       <div id='circlepadding' style={{backgroundColor:'white', borderRadius:'50%'}} className='col-lg-3 col-md-2 col-sm-4 p-1'><h3 style={{backgroundColor:'#eb5b33', borderRadius:'50%'}} className='p-lg-3 p-md-2 p-3 text-center m-md-2 m-1 pt-2 pb-2'>2</h3></div>
       <h3 className='text-white mt-3'>Make a Payment</h3>
       <p className='fs-3 text-white mt-3'>Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam labor quo obcaecati similique iusto</p>
       <div className='mt-3 text-white'>
       <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Apartments frequently or motionless.</p>
            </div>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Voluptatem quia voluptas sit aspernatur.</p>
            </div>
       </div>
       </div>
       <div className="col-lg-4 d-flex flex-column align-items-center">
       <div id='circlepadding' style={{backgroundColor:'white', borderRadius:'50%'}} className='col-lg-3 col-md-2 col-sm-4 p-1'><h3 style={{backgroundColor:'#eb5b33', borderRadius:'50%'}} className='p-lg-3 p-md-2 p-3 text-center m-md-2 m-1 pt-2 pb-2'>3</h3></div>
       <h3 className='text-white mt-3'>Track your Order</h3>
       <p className='fs-3 text-white mt-3'>Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam labor quo obcaecati similique iusto</p>
       <div className='mt-3 text-white'>
       <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Apartments frequently or motionless.</p>
            </div>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faCheck} size='2x' style={{color:'white',backgroundColor:'red',borderRadius:'50%'}}/>
              <p className='fs-5 ms-2'>Voluptatem quia voluptas sit aspernatur.</p>
            </div>
       </div>
       </div>
      </div>
      </div>
    </section>
  )
}

export default About
