import React, { useEffect, useState } from 'react'
import Home from './Page/Home'
import Career from './Page/Career'
import Contact from './Page/Contact'
import Service from './Page/Service'
import Tracking from './Page/Tracking'
import About from './Page/About'
import { BrowserRouter as Router , Routes , Route ,Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkerAlt ,faSearch} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import image from './Images/images.png'
function Navbar({active,handleActive}){
  const location = useLocation(); 

  useEffect(() => {
    const currentPath = location.pathname.replace('/', '');
    handleActive(currentPath || 'home');
  }, [location.pathname, handleActive]);
  return(
    <section id='navbar'>
     <div className="container-fluid" >
            <div className="row">
                <div className="col-4 text-white p-sm-3 p-2" style={{backgroundColor:'#eb5b33'}}>
                    <h3 className='display-3 fw-bold'>Logistic</h3>
                </div>
                <div className="col-8">
                    <div className="row d-flex pt-md-3 pt-2" style={{backgroundColor:'#000933'}}>
                        <div className="col-8 d-sm-flex">
                           <FontAwesomeIcon icon={faPhone} size='2x' style={{color:'white'}} className='icon4'/>
                            <h4 className='pe-2 fs-small text-white'>+92 317693323</h4>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' style={{color:'white'}} className='icon5'/>
                            <h4 className='pe-2 fs-small text-white'>450 stard,Chring Cross,PK</h4>
                        </div>
                        <div className="col-4 d-flex">
                            <div className="vr mb-md-3"></div>
                            <div className='ps-md-2 ps-1 d-sm-flex'>
                            <FontAwesomeIcon icon={faFacebook} size='2x' style={{color:'white'}} className='ps-md-2 ps-0 icon1'/><br/>
                            <FontAwesomeIcon icon={faTwitter} size='2x' style={{color:'white'}} className='ps-md-2 ps-0 icon2'/><br/>
                            <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{color:'white'}} className='ps-md-2 ps-0 icon3'/></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-0">
                        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img src={image} alt="LOGO" className='img-fluid rounded' style={{width:'50px', height:'50px',backgroundSize:'fill'}} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className={`nav-item ${active === "home"?"active":""}`} onClick={()=>handleActive("home")}>
          <Link className={`nav-link ${active === "home"?"active":""}`} style={ active === "home"?{color:'#eb5b33'}:{}}
          to="/">Home</Link>
        </li>
        <li className={`nav-item ${active === "service"?"active":""}`} onClick={()=>handleActive("service")}>
          <Link className={`nav-link ${active === "service"?"active":""}`} style={ active === "service"?{color:'#eb5b33'}:{}} to="/service">Service</Link>
        </li>
        <li className={`nav-item ${active === "career"?"active":""}`} onClick={()=>handleActive("career")}>
          <Link className={`nav-link ${active === "career"?"active":""}`} style={ active === "career"?{color:'#eb5b33'}:{}} to="/career">Career</Link>
        </li>
        <li className={`nav-item ${active === "track"?"active":""}`} onClick={()=>handleActive("track")}>
          <Link className={`nav-link ${active === "track"?"active":""}`} style={ active === "track"?{color:'#eb5b33'}:{}} to="/track">Tracking</Link>
        </li>
        <li className={`nav-item ${active === "about"?"active":""}`} onClick={()=>handleActive("about")}>
          <Link className={`nav-link ${active === "about"?"active":""}`} style={ active === "about"?{color:'#eb5b33'}:{}} to="/about">About</Link>
        </li>
        <li className={`nav-item ${active === "contact"?"active":""}`} onClick={()=>handleActive("contact")}>
          <Link className={`nav-link ${active === "contact"?"active":""}`} style={ active === "contact"?{color:'#eb5b33'}:{}} to="/contact">Contact us</Link>
        </li>
      </ul>
      <ul className='d-flex'>
      <li><FontAwesomeIcon className='ms-auto mt-4' icon={faSearch} size='1x' style={{color:'black'}}/></li>
      </ul>
    </div>
  </div>
</nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}
function Footer({active,handleActive}){
  return (
    <section id='footer'>
      <div className="container-fluid" style={{backgroundColor:'#020303'}}>
      <div className="container">
        <div className="row mt-md-5 mt-3">
          <div className="col-md-6">
           <h3 className='text-white'>Subscribe Our Newsletter Get Update</h3>
          </div>
          <div className="col-md-6">
          <div className="input-group mb-3">
          <input type="text" className="form-control text-white" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{backgroundColor:'#565554'}}/>
            <span className="input-group-text text-white" id="basic-addon2" style={{backgroundColor:'#eb5b33',cursor:'pointer'}}>Subscribe</span>
          </div>
          </div>
        </div>
        <hr style={{color:'white'}}/>
        <div className="row">
          <div className="col-md-5">
            <h1 className='text-white fw-bold'>Logistic</h1>
            <p className='text-white fs-4 mt-3'>Pellentesque non dolor vitae lacus fringilla
               consequat vel quis enim. Cras venenatis
               mollis neque in fringilla. In vitae</p>
              <div className='d-flex mt-md-5 mt-3'>
              <div id='font1' className='p-md-3 p-1 me-2' style={{backgroundColor:'#565554',borderRadius:'50%'}}><a className='text-decoration-none' href="mailto:Transport@gmail.com" target='-blank'><FontAwesomeIcon icon={faEnvelope} size='2x' style={{color:'white'}}/></a></div>
              <div id='font2' className='p-md-3 p-1 me-2' style={{backgroundColor:'#565554',borderRadius:'50%'}}><a href='https://www.facebook.com' className='text-decoration-none' target='-blank'><FontAwesomeIcon icon={faFacebook} size='2x' style={{color:'white'}}/></a></div>
              <div id='font3' className='p-md-3 p-1 me-2' style={{backgroundColor:'#565554',borderRadius:'50%'}}><a href='https://www.instagram.com' className='text-decoration-none' target='-blank'><FontAwesomeIcon icon={faInstagram} size='2x' style={{color:'white'}}/></a></div>
              <div id='font4' className='p-md-3 p-1' style={{backgroundColor:'#565554',borderRadius:'50%'}}><a href='https://www.linkedin.com' className='text-decoration-none' target='-blank'><FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{color:'white'}}/></a></div>
              </div>
          </div>
          <div className="col-md-3">
            <h2 className='text-white fw-bold'>Office Address</h2>
            <hr style={{height:'5px', width:'75px',backgroundColor:'#eb5b33'}}/>
            <p className='text-white fs-5'>3891 Ranchview Dr. Richardson,California 62639</p>
            <p className='text-white fs-5'>Mon-Fri : 09.00 am-05.00 pm</p>
            <p className='text-white fs-5' style={{textDecorationLine:'underline'}}>+99 (456) 568 65</p>
            <p className='text-white fs-5' style={{textDecorationLine:'underline'}}>info.support@gmail.com</p>
          </div>
          <div className="col-md-2">
             <h2 className='text-white fw-bold'>Explore</h2>
             <hr style={{height:'5px', width:'75px',backgroundColor:'#eb5b33'}}/>
             <Link to="/about" className={`text-decoration-none ${active === "about"?"active":""}`} onClick={()=>handleActive("about")}><h4 className='text-white' style={active === "about"?{color:'#eb5b33'}:{}} >About</h4></Link> 
             <Link to="/service" className={`text-decoration-none ${active === "service"?"active":""}`} onClick={()=>handleActive("service")}><h4 className='text-white' style={active === "service"?{color:'#eb5b33'}:{}} >Services</h4></Link>
             <Link to="/" className={`text-decoration-none ${active === "home"?"active":""}`} onClick={()=>handleActive("home")}><h4 className='text-white' style={active === "home"?{color:'#eb5b33'}:{}} >Portfolio</h4></Link>
             <Link to="/contact" className={`text-decoration-none ${active === "contact"?"active":""}`} onClick={()=>handleActive("contact")}><h4 className='text-white' style={active === "contact"?{color:'#eb5b33'}:{}} >Contact us</h4></Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
function App() {
  const [active, setActive] = useState("home");
  const handleActive = (option) => {
    setActive(option);
  };
  return (
    <>
    <Router basename="/Logistic/">
      <Navbar active={active} handleActive={handleActive}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/career' element={<Career/>}></Route>
        <Route path='/track' element={<Tracking/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer active={active} handleActive={handleActive}/>
    </Router>
    </>
  )
}

export default App
