import React from 'react'
import image from '../Images/container.png'
import image1 from '../Images/images.png'
import image2 from '../Images/live.png'
import image3 from '../Images/networking.png'
import image4 from '../Images/travelling.png'
import img1 from '../Images/images-2.png'
import img2 from '../Images/images-3.png'
import img6 from '../Images/images-5.png'
import img7 from '../Images/images-6.png'
import img8 from '../Images/images-7.png'
import img9 from '../Images/images-8.png'
import img10 from '../Images/images-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Service = () => {
  return (
    <section id='service'>
      <div className="container-fluid vh-100" style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='header'>
      <div className="row" id='header'>
                <div className="col-12 text-white m-5" id='headercol'>
                    <div className='d-flex'><img src={image1} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold'>WE'RE PROVIDE BEST SERVICES</h3>
                    </div>
                    <h2 className='fw-bold'>TRANSPORT</h2>
                    <h1 className='display-1 fw-bold'>FOR EVERYTHING</h1>
                    <h5 className='me-5'>Vivamus Mangna justo, lacinia eget consectetur sed, convellis at tellus, Quisque velit nisipretium ut lacinia in, elementum id enim. nulla quis lorem ut libero</h5>
                </div>
            </div>
      </div>
      <div className="container-fluid">
      <div className="row d-flex justify-content-center mt-md-5 mt-3">
                    <div className="col-md-6 col-12 d-flex flex-column align-items-center">
                    <div className='d-flex'><img src={image1} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}}/>
                    <h3 className='fw-bold' style={{color:'#FF5E18'}}>OUR SERVICES</h3>
                    </div>
                    </div>
                </div>
        <div className="row my-md-5 my-3">
          <div className="container" id='flexitems'>
           <div className="row d-flex justify-content-around">
            <div className="col-md-4 d-md-flex">
              <div className='mt-5'><img src={image4} alt="Travelling" style={{width:'50px',height:'50px'}} className='img-fluid mt-1'/>
              <h3 className='fw-bold'>Transportation</h3>
              <p className='fs-4'>Esteem spirit temper too say
              adieus who direct esteem. It look estee luckily or picture placing drawing.</p></div>
              <div className="vr"></div> 
            </div>
            <div className="col-md-4 d-md-flex">
           <div className='mt-md-5 mt-0'>
           <img src={image2} alt="Live" style={{width:'50px',height:'50px'}} className='img-fluid mt-1'/>
              <h3 className='fw-bold'>Live Monitoring</h3>
              <p className='fs-4'>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.</p>
           </div>
              <div className="vr"></div> 
            </div>
            <div className="col-md-4 d-md-flex">
            <div className='mt-md-5 mt-0'><img src={image3} alt="Live" style={{width:'50px',height:'50px'}} className='img-fluid mt-1'/>
              <h3 className='fw-bold'>Worldwide Service</h3>
              <p className='fs-4'>Esteem spirit temper too say
              adieus who direct esteem. It look estee luckily or picture placing drawing.</p></div>
            </div>
           </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundColor:'#e9e9e9'}}>
        <div className="row mt-md-5 mt-3">
        <div className="col-12 d-flex flex-column align-items-center">
          <h1 className='display-3 fw-bold' id='display'>Services we Offer</h1>
          </div>
        </div>
        <div className="row">
              <div className="col-md-4 my-md-3 my-2" style={{paddingBottom: '30px',
    overflowY: 'hidden'}}>
                <img src={img6} alt="Plane" style={{height:'100%',width:'100%'}} className='img-fluid' />
                <div className='bg-white text-black p-3 col-8 airfright text-center'><h3>Air Feright</h3></div>
              </div>
              <div className="col-md-4 my-md-3 my-2" style={{paddingBottom: '30px',
    overflowY: 'hidden'}}>
                <img src={img1} alt="Plane" style={{height:'100%',width:'100%'}} className='img-fluid' />
                <div className='bg-white text-black p-3 col-8 airfright text-center'><h3>Truck Feright</h3></div>
              </div>
              <div className="col-md-4 my-md-3 my-2" style={{paddingBottom: '30px',
    overflowY: 'hidden'}}>
                <img src={img9} alt="Plane" style={{height:'100%',width:'100%'}} className='img-fluid' />
                <div className='bg-white text-black p-3 col-8 airfright text-center'><h3>Cargo Feright</h3></div>
              </div>
              <div className="col-md-4 my-md-3 my-2" style={{paddingBottom: '30px',
    overflowY: 'hidden'}}>
                <img src={img8} alt="Plane" style={{height:'100%',width:'100%'}} className='img-fluid' />
                <div className='bg-white text-black p-3 col-8 airfright text-center'><h3>Bicycle Feright</h3></div>
              </div>
              <div className="col-md-4 my-md-3 my-2" style={{paddingBottom: '30px',
    overflowY: 'hidden'}}>
                <img src={img7} alt="Plane" style={{height:'100%',width:'100%'}} className='img-fluid' />
                <div className='bg-white text-black p-3 col-8 airfright text-center'><h3>Bike Feright</h3></div>
              </div>
              <div className="col-md-4 my-md-3 my-2" style={{paddingBottom: '30px',
    overflowY: 'hidden'}}>
                <img src={img2} alt="Plane" style={{height:'100%',width:'100%'}} className='img-fluid' />
                <div className='bg-white text-black p-3 col-8 airfright text-center'><h3>Road Feright</h3></div>
              </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundImage:`url(${img9})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className="row d-flex justify-content-center my-md-5 my-3">
            <div className="col-md-8 d-flex flex-column align-items-center">
              <h1 className='display-4 fw-bold text-white my-md-5 my-2' id='display'>100% Secure and Safe</h1>
              <p className='fs-2 text-white'>
              Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.
              </p>
                <button type='button' className='border-0 p-3' style={{backgroundColor:'#eb5b33',color:'white'}}>Contact Us</button>
            </div>
            </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row" id='relativerow'>
          <div className="col-md-6" style={{backgroundColor:'#eb5b33'}} id='rowcol'>
          <img src={img10} alt="" className='img-fluid absoluteimage'/>
          </div>
          <div className="col-md-6">
            <h1 className='fw-bold'>WHY CHOOSE US?</h1>
            <p className='fs-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
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
            <button type='button' style={{border:'3px solid #eb5b33',backgroundColor:'white'}} className='p-2 m-md-5 m-3 fs-3'>About Us</button>
          </div>
        </div>
      </div>
      <div className="container my-md-5 my-3" style={{backgroundColor:'#e9e9e9'}}>
        <div className="row p-5">
          <div className="col-md-3">
            <h3 style={{color:'#eb5b33'}} className='text-center'>42+</h3>
            <h4 style={{color:'#565554'}} className='text-center'>Countries Covered</h4>
          </div>
          <div className="col-md-3">
          <h3 style={{color:'#eb5b33'}} className='text-center'>97+</h3>
          <h4 style={{color:'#565554'}} className='text-center'>Business Success</h4>
          </div>
          <div className="col-md-3">
          <h3 style={{color:'#eb5b33'}} className='text-center'>2342+</h3>
          <h4 style={{color:'#565554'}} className='text-center'>Happy Clients</h4>
          </div>
          <div className="col-md-3">
          <h3 style={{color:'#eb5b33'}} className='text-center'>3245+</h3>
          <h4 style={{color:'#565554'}} className='text-center'>Business Done</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
