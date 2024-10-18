import React from 'react'
import image from '../Images/images.png'
import image1 from '../Images/Tracking.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
const Tracking = () => {
  return (
    <section id='tracking'>
      <div className="container-fluid vh-100" style={{backgroundImage:`url(${image1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='header'>
      <div className="row" id='header'>
                <div className="col-12 text-white m-5" id='headercol'>
                    <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold'>Tracking</h3>
                    </div>
                    <h1 className='display-1 fw-bold'>LOGISTICS TRACKING</h1>
                    <h5 className='me-5'>Vivamus Mangna justo, lacinia eget consectetur sed, convellis at tellus, Quisque velit nisi
                    pretium ut lacinia in, elementum id enim. nulla quis lorem ut libero</h5>
                </div>
            </div>
      </div>
      <div className="container">
        <div className="row mt-md-5 mt-3">
          <div className="col-md-6">
            <h3 className='display-4 fw-bold'>Logistics Tracking</h3>
            <p className='text-danger'>Official website</p>
          </div>
        </div>
        <div className="row ">
        <div className="col-md-6">
        <div className="input-group input-group-lg mb-3">
         <input
           type="text"
            className="form-control"
            placeholder="Tracking no"
            style={{ height: '50px', fontSize: '1.25rem' }}/>
             <span className="input-group-text" id="basic-addon2" style={{ height: '50px' }}>
           <FontAwesomeIcon icon={faSearch} size="lg" />
          </span>
         </div></div>

<div className="col-md-4">
  <div
    className="btn text-white btn-lg"
    style={{ backgroundColor: '#eb5b33', height: '50px', fontSize: '1.25rem' }} > Track a Parcel</div></div>
        </div>
        <div className="row mt-md-5">
          <div className="col-md-6">
            <h3 className='text-muted'>Track your Parcel from Logistic in one click</h3>
            <p className='fs-4'>Enter a logisticc tracking no to track parcel</p>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faArrowLeft} size='2x' style={{backgroundColor:'black',color:'white'}}/>
              <p className='fs-4 ms-3'>Back to Courier List</p>
            </div>
          </div>
      </div>
      <div className="row my-md-5 my-3">
        <div className="col-md-12">
          <h3 className='fw-bold'>How to track my Logistics package?</h3>
          <p className='fs-4 text-muted'>Logistics package tracking is easy with Ordertracker, all you have to do is to paste your tracking number in the above field to track a package or go to the track my parcel section. We provide you with the most powerful parcel tracking system for any post office. Ordertracker accepts any international tracking number, it is an universal tracking website to track a parcel on a global level such as "track my parcel" with accurate informations about your shipment.</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Tracking
