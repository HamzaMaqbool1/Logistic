import React, { useState } from 'react'
import image from '../Images/images.png'
import img1 from '../Images/images-2.png'
import img2 from '../Images/images-3.png'
import img3 from '../Images/images-4.png'
import img4 from '../Images/Affordable.png'
import img5 from '../Images/delivery.png'
import img6 from '../Images/images-5.png'
import img7 from '../Images/images-6.png'
import img8 from '../Images/images-7.png'
import img9 from '../Images/images-8.png'
import img10 from '../Images/image9.png'
import img11 from '../Images/flight.png'
import img12 from '../Images/bicycle.png'
import img13 from '../Images/cargo-ship.png'
import img14 from '../Images/truck.png'
import img15 from '../Images/fast-delivery.png'
import img16 from '../Images/shipped.png'
import img17 from '../Images/CargoVan.jpg'
import img18 from '../Images/group.png'
import img19 from '../Images/earth-grid.png'
import img20 from '../Images/client.png'
import img21 from '../Images/delivery-time.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const Home = () => {
    const [expand,setExpand]=useState(false)
    const handleExpand=()=>{
        setExpand(!expand)
    }
  return (
    <section id='home'>
        <div className="container-fluid vh-100" style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='header'>
            <div className="row">
                <div className="col-12 text-white m-5" id='headercol'>
                    <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold'>WE'RE PROVIDE BEST SERVICES</h3>
                    </div>
                    <h2 className='fw-bold'>TRANSPORT</h2>
                    <h1 className='display-1 fw-bold'>FOR EVERYTHING</h1>
                    <h5 className='me-5'>Vivamus Mangna justo, lacinia eget consectetur sed, convellis at tellus, Quisque velit nisipretium ut lacinia in, elementum id enim. nulla quis lorem ut libero</h5>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row my-md-5 my-3">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-7 order-lg-2 order-1 rounded">
                            <img src={img3} alt="Worker-image" style={{width:'100%', height:'-webkit-fill-available'}} className='img-fluid rounded'/>
                        </div>
                        <div className="col-4 order-lg-1 order-2 rounded">
                            <img src={img1} alt="" style={{width:'300px', height:'300px'}} className='img-fluid rounded mb-3'/>
                            <img src={img2} alt="" style={{width:'600px', height:'400px'}} className='img-fluid rounded'/>
                        </div>
                        <div style={{position:'absolute',backgroundColor:'#eb5b33', borderRadius:'50%', width:'230px', height:'230px'}} id='imagetext'>
                          <h3 className='text-white p-5'>25+ Years working Experience</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-3">
                   <div className="row">
                   <div className='d-flex'>
                    <img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold' style={{color:'#eb5b33'}}>ABOUT US</h3>
                    </div>
                    <h1 className='display-4 fw-bold'>Provide Transportation Services Since 1995</h1>
                    <p className='fs-5 fw-semibold'>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis infaucibus orci luctus et ultrices posuere cubilia Curae;{expand && (<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, rem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus quisquam fuga illo possimus error fugit accusamus facilis quaerat laboriosam!</>)}</p>
                    <Link to="/home" className='text-decoration-none' onClick={handleExpand} style={{color:'#eb5b33'}}>{expand?'Read Less':"Read More"}</Link>
                    <div className='d-flex my-lg-5 my-3'>
                        <div className='d-flex'>
                            <img src={img4} alt="Affordable-price" style={{width:'80px', height:'80px'}} className='img-fluid'/>
                            <div className='d-block'>
                            <h3>Affordable Cost</h3>
                            <p>Mauris blandit aliquet, eget
                            Tincidunt nibh pulvinar</p>
                            </div>
                        </div>
                        <div className='vh' id='verticalheight'></div>
                        <div className='d-flex'>
                        <img src={img5} alt="Affordable-price" style={{width:'80px', height:'80px'}} className='img-fluid'/>
                           <div className='d-block'>
                           <h3>Affordable Cost</h3>
                            <p>Mauris blandit aliquet, eget
                            Tincidunt nibh pulvinar</p>
                           </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:'#e9e9e9'}}>
            <div className="container p-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10 col-12 d-flex flex-column align-items-center">
                    <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold' style={{color:'#FF5E18'}}>OUR SERVICES</h3>
                    </div>
                    <h1 className='display-3 fw-bold' id='display'>Specialist Logistics Services</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex flex-wrap gap-lg-5 gap-2">
                        <div style={{width:'20rem'}}>
                           <div> <img src={img6} alt="" style={{width:'100%',height:'100%'}}/></div>
                            <div className='bg-white p-md-4 p-2' id='service'>
                                <h3>Air Frieght</h3>
                                <p>Air freight offers several advantages
                                over others modes of transportation</p>
                                <hr />
                                <a href="#" className='text-black'>Read More <FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></a>
                            </div>
                            <img src={img11} alt="Flight" className='img-fluid p-2' style={{backgroundColor:'#eb5b33',color:'white', borderRadius:'50%',width:'100px', height:'100px'}} id='icon'/>
                        </div>
                        <div style={{width:'20rem'}}>
                           <div> <img src={img9} alt="" style={{width:'100%',height:'178px'}}/></div>
                            <div className='bg-white p-md-4 p-2' id='service'>
                                <h3>Cargo Freight</h3>
                                <p>cargo freight is the transportation of goods through the sea.Cargo is good.</p>
                                <hr />
                                <a href="#" className='text-black'>Read More <FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></a>
                            </div>
                            <img src={img13} alt="Flight" className='img-fluid p-2' style={{backgroundColor:'#eb5b33',color:'white', borderRadius:'50%',width:'100px', height:'100px'}} id='icon1'/>
                        </div>
                        <div style={{width:'20rem'}}>
                           <div> <img src={img2} alt="" style={{width:'100%',height:'178px'}}/></div>
                            <div className='bg-white p-md-4 p-2' id='service'>
                                <h3>Road Freight</h3>
                                <p>road freight can be carried out of by
                                various of vehicles flatbed trucks</p>
                                <hr />
                                <a href="#" className='text-black'>Read More <FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></a>
                            </div>
                            <img src={img16} alt="Flight" className='img-fluid p-2' style={{backgroundColor:'#eb5b33',color:'white', borderRadius:'50%',width:'100px', height:'100px'}} id='icon2'/>
                        </div>
                        <div style={{width:'20rem'}}>
                           <div> <img src={img7} alt="" style={{width:'100%',height:'178px'}}/></div>
                            <div className='bg-white p-md-4 p-2' id='service'>
                                <h3>Bike Freight</h3>
                                <p>Bike freight also known as bicycle logistics, refers of goods or cargo.cargo is good.</p>
                                <hr />
                                <a href="#" className='text-black'>Read More <FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></a>
                            </div>
                            <img src={img15} alt="Flight" className='img-fluid p-2' style={{backgroundColor:'#eb5b33',color:'white', borderRadius:'50%',width:'100px', height:'100px'}} id='icon3'/>
                        </div>
                        <div style={{width:'20rem'}}>
                           <div> <img src={img8} alt="" style={{width:'100%',height:'178px'}}/></div>
                            <div className='bg-white p-md-4 p-2' id='service'>
                                <h3>Bicycle Freight</h3>
                                <p>Bicycle freight also known as bicycle logistics, refers of goods or cargo.cargo is good.</p>
                                <hr />
                                <a href="#" className='text-black'>Read More <FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></a>
                            </div>
                            <img src={img12} alt="Flight" className='img-fluid p-2' style={{backgroundColor:'#eb5b33',color:'white', borderRadius:'50%',width:'100px', height:'100px'}} id='icon4'/>
                        </div>
                        <div style={{width:'20rem'}}>
                           <div> <img src={img10} alt="" style={{width:'100%',height:'178px'}}/></div>
                            <div className='bg-white p-md-4 p-2' id='service'>
                                <h3>Truck Freight</h3>
                                <p>Truck freight also known as bicycle logistics, refers of goods or cargo.cargo is good.</p>
                                <hr />
                                <a href="#" className='text-black'>Read More <FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></a>
                            </div>
                            <img src={img14} alt="Flight" className='img-fluid p-2' style={{backgroundColor:'#eb5b33',color:'white', borderRadius:'50%',width:'100px', height:'100px'}} id='icon5'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid vh-100" style={{backgroundColor:'#e9e9e9',backgroundImage:`url(${img17})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='formabsolute'>
            <div className="row">
                <div className="col-md-8 vh-100 bg-dark p-md-5 p-3">
                <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold' style={{color:'#eb5b33'}}>Request Quote</h3>
                    </div>
                    <p className='display-4 text-white fw-bold' id='fonttext'>We Create Opportunity to Reach Potiential</p>
                </div>
                <div className='row'>
                    <div className="col-md-8 col-12" id='form'>
                        <div className="row" style={{backgroundColor:'white'}}>
                            <div className='d-flex justify-content-around p-md-3 p-2'>
                            <h3 >Request a Quote</h3>
                            <h3>Real Time Tracking</h3>
                            <h3>24/7 Hours Support</h3>
                            </div>
                        </div>
                        <div className='row ' style={{backgroundColor:'#2d313d'}}>
                            <div className="row my-2 mx-md-5 mx-2">
                                <div className="col-md-5 mb-2">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name"/>
                                </div>
                                <div className="col-md-5 mb-2">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email"/>
                                </div>
                            </div>
                            <div className="row my-2 mx-md-5 mx-2">
                                <div className="col-md-5 mb-2">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Weight,Kg"/>
                                </div>
                                <div className="col-md-5 mb-2">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Distance,Km"/>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-10 ms-md-5 ms-2 my-2">
                                <select className="form-select" aria-label="Default select example">
                                <option >Select Frieght</option>
                                <option value="1">Air</option>
                                <option value="2">Cargo</option>
                                <option value="3">Road</option>
                                <option value="4">Bike</option>
                                <option value="5">Bicycle</option>
                                <option value="6">Truck</option>
                                </select>
                                </div>
                            </div>
                            <div  className='btn text-white col-lg-2 col-md-3 col-sm-3 col-5 ms-5 mt-lg-5 mt-2' style={{backgroundColor:'#FF5E18'}}>Send Quote</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row mt-md-5 mt-3">
            <div className="col-12 d-flex flex-column align-items-center">
                    <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold' style={{color:'#FF5E18'}}>OUR PORTFOLIO</h3>
                    </div>
                    <h1 className='display-3 fw-bold' id='display'>Our Recent Work Showcase</h1>
                    </div>
            </div>
            <div className="row d-flex justify-content-around my-md-5 my-2">
                <div className="col-md-3 p-lg-5 p-3 my-3 text-center" style={{backgroundImage:`url(${img3})`, backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='portfolio'>
                    <h3 style={{color:'#eb5b33'}}>Packging</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed</p>
                    <a href="#" style={{color:'#eb5b33'}} >Read More <FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></a>
                </div>
                <div className="col-md-3 p-lg-5 p-3 my-3 text-center" style={{backgroundImage:`url(${img9})`, backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='portfolio'>
                    <h3 style={{color:'#eb5b33'}}>Ocean Frieght</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed</p>
                    <a href="#" style={{color:'#eb5b33'}} >Read More <FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></a>
                </div>
                <div className="col-md-3 p-lg-5 p-3 my-3 text-center" style={{backgroundImage:`url(${img6})`, backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='portfolio'>
                    <h3 style={{color:'#eb5b33'}}>Flight Frieght</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed</p>
                    <a href="#" style={{color:'#eb5b33'}} >Read More <FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></a>
                </div>
            </div>
        </div>
        <div className="container-fluid vh-100" style={{backgroundImage:`url(${img6})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='portfolio'>
            <div className="row d-flex justify-content-center my-md-5 my-3">
            <div className="col-md-8 d-flex flex-column align-items-center">
              <h1 className='display-3 fw-bold text-white' id='display'>24/7 customer support any time of the day or night</h1>
              <div className='d-flex gap-3'>
                <button type='button' className='border-0 p-3' style={{backgroundColor:'#000933',color:'white'}}>Free Quote</button>
                <button type='button' className='border-0 p-3' style={{backgroundColor:'#eb5b33',color:'white'}}>Contact Us</button>
              </div>
            </div>
            </div>
        </div>
        <div className="container" id='flexitems'>
            <div className="row" style={{backgroundColor:'#000933'}} >
                <div className="col-md text-center d-md-flex p-0">
                    <div><img src={img20} alt="Client" style={{width:'50px', height:'50px', backgroundColor:'white', borderRadius:'50%'}}/>
                    <h2 className='fw-bold text-white'>15k</h2>
                    <h2 className='text-white'>Worldwide Client</h2></div>
                    <div className="vr"></div>  
                </div>
                <div className="col-md text-center d-md-flex p-0">
                    <div><img src={img19} alt="Client" style={{width:'50px', height:'50px', backgroundColor:'white', borderRadius:'50%'}}/>
                    <h2 className='fw-bold text-white'>189+</h2>
                    <h2 className='text-white'>Worldwide Branches</h2></div>
                    <div className="vr"></div>  
                </div>
                <div className="col-md text-center d-md-flex p-0">
                    <div><img src={img18} alt="Client" style={{width:'50px', height:'50px', backgroundColor:'white', borderRadius:'50%'}}/>
                    <h2 className='fw-bold text-white'>950+</h2>
                    <h2 className='text-white'>Expert Company Staff</h2></div>
                    <div className="vr"></div>  
                </div>
                <div className="col-md text-center p-0">
                    <img src={img21} alt="Client" style={{width:'50px', height:'50px', backgroundColor:'white', borderRadius:'50%'}}/>
                    <h2 className='fw-bold text-white'>15k</h2>
                    <h2 className='text-white'>Succesful Deliver</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
