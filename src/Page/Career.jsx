import React from 'react'
import image from '../Images/images.png'
import image1 from '../Images/images-4.png'
import image2 from '../Images/women.png'
import image3 from '../Images/men.jpg'
import image4 from '../Images/men1.jpg'
import image5 from '../Images/images-8.png'
import image6 from '../Images/Storage.jpg'
import image7 from '../Images/Warehouse.jpg'
import image8 from '../Images/images-5.png'
const Career = () => {
  return (
    <section id='career'>
       <div className="container-fluid vh-100" style={{backgroundImage:`url(${image1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='header'>
      <div className="row" id='header'>
                <div className="col-12 text-white m-5" id='headercol'>
                    <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold'>Career</h3>
                    </div>
                    <h1 className='display-1 fw-bold'>WE MAKE SHIPPING</h1>
                    <h5 className='me-5'>Vivamus Mangna justo, lacinia eget consectetur sed, convellis at tellus, Quisque velit nisi
                    pretium ut lacinia in, elementum id enim. nulla quis lorem ut libero</h5>
                </div>
            </div>
      </div>
      <div className="container-fluid">
      <div className="row d-flex justify-content-center mt-md-5 mt-3">
                    <div className="col-lg-10 col-12 d-flex flex-column align-items-center">
                    <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold' style={{color:'#FF5E18'}}>OUR TEAM</h3>
                    </div>
                    <hr style={{backgroundColor:'#eb5b33',width:'80px',height:'5px',border:'3px solid #eb5b33'}} className='m-0' />
                    </div>
                </div>
        <div className="row d-flex justify-content-around my-lg-5 my-3">
          <div className="col-md-3 text-center">
            <img src={image3} alt="men" style={{width:'300px',height:'300px',borderRadius:'50%'}} className='img-fluid'/>
            <h3 className='fw-bold'>Christine Rooster</h3>
            <h6>CO-FOUNDER, PRESIDENT</h6>
            <p className='fs-4 text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste
            error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.</p>
          </div>
          <div className="col-md-3 text-center">
            <img src={image2} alt="men" style={{width:'300px',height:'300px',borderRadius:'50%'}} className='img-fluid'/>
            <h3 className='fw-bold'>Christine Rooster</h3>
            <h6>CO-FOUNDER, COO</h6>
            <p className='fs-4 text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste
            error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.</p>
          </div>
          <div className="col-md-3 text-center">
            <img src={image4} alt="men" style={{width:'300px',height:'300px',borderRadius:'50%'}} className='img-fluid'/>
            <h3 className='fw-bold'>Christine Rooster</h3>
            <h6>CO-FOUNDER, Marketing</h6>
            <p className='fs-4 text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste
            error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="row d-flex justify-content-center mt-md-5 mt-3">
                    <div className="col-lg-10 col-12 d-flex flex-column align-items-center">
                    <div className='d-flex'><img src={image} alt="LOGO" className='img-fluid rounded me-2' style={{width:'30px', height:'30px', backgroundSize:'fill'}} />
                    <h3 className='fw-bold' style={{color:'#FF5E18'}}>INDUSTRIES</h3>
                    </div>
                    <hr style={{backgroundColor:'#eb5b33',width:'80px',height:'5px',border:'3px solid #eb5b33'}} className='m-0' />
                    </div>
                </div>
      <div className="row my-md-5 my-3">
        <div className="col-md-3" style={{paddingBottom:'30px',overflowY:'hideen',paddingLeft:'0px',paddingRight:'0px'}}>
          <img src={image5} alt="Cargo" style={{width:'100%',height:'100%'}} className='img-fluid'/>
          <h3 id='cargo'style={{position:'absolute',marginTop:'-30px',marginLeft:'120px'}} className='text-white' >Cargo Ship</h3>
        </div>
        <div className="col-md-3" style={{paddingBottom:'30px',overflowY:'hideen',paddingLeft:'0px',paddingRight:'0px'}}>
        <img src={image7} alt="warehouse" style={{width:'100%',height:'100%'}} className='img-fluid'/>
        <h3 id='warehouse' style={{position:'absolute',marginTop:'-30px',marginLeft:'120px'}} className='text-white'>WareHouse</h3>
        </div>
        <div className="col-md-3" style={{paddingBottom:'30px',overflowY:'hideen',paddingLeft:'0px',paddingRight:'0px'}}>
        <img src={image6} alt="storage" style={{width:'100%',height:'100%'}} className='img-fluid'/>
        <h3 id='storage' style={{position:'absolute',marginTop:'-30px',marginLeft:'120px'}} className='text-white'>Storage</h3>
        </div>
        <div className="col-md-3" style={{paddingBottom:'30px',overflowY:'hideen',paddingLeft:'0px',paddingRight:'0px'}}>
        <img src={image8} alt="Transport" style={{width:'100%',height:'100%'}} className='img-fluid'/>
        <h3 id='air' style={{position:'absolute',marginTop:'-30px',marginLeft:'120px'}} className='text-white'>Air Transport</h3>
        </div>
      </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className='fw-bold'>Recent Job Openings</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-3">
            <input type="text" className="form-select" placeholder='Search jobs'/>
          </div>
          <div className="col-md-3 my-3">
          <select className="form-select" aria-label="Default select example">
          <option value="">Nothing Selectd</option>
          </select>
          </div>
          <div className="col-md-3 my-3">
          <select className="form-select" aria-label="Default select example">
          <option value="">Nothing Selectd</option>
          </select>
          </div>
        </div>
        <div className="row mt-md-3 mt-2 d-flex align-items-center">
          <div className="col-md-4"><h3 style={{color:'#eb5b33'}}>Supervisor-Civil</h3></div>
          <div className="col-md-4"><p className='fs-3 text-muted'>Agility Logistic Parks</p></div>
          <div className="col-md-4"><p className='fs-3 text-muted'>As Sulay,Riyadh Province,Saudi Arabia</p></div>
        </div>
        <hr />
        <div className="row mt-md-3 mt-2  d-flex align-items-center">
          <div className="col-md-4"><h3 style={{color:'#eb5b33'}}>Assistant Manager,Contract Administrator</h3></div>
          <div className="col-md-4"><p className='fs-3 text-muted'>Agility Logistic Parks</p></div>
          <div className="col-md-4"><p className='fs-3 text-muted'>As Sulay,Riyadh Province,Al Jahra Kuwait</p></div>
        </div>
        <hr />
        <div className="row mt-md-3 mt-2  d-flex align-items-center">
          <div className="col-md-4"><h3 style={{color:'#eb5b33'}}>Welder</h3></div>
          <div className="col-md-4"><p className='fs-3 text-muted'>Agility Logistic Parks</p></div>
          <div className="col-md-4"><p className='fs-3 text-muted'>As Sulay,Riyadh Province,Al Jahra Kuwait</p></div>
        </div>
        <hr />
        <div className="row mt-md-3 mt-2  d-flex align-items-center">
          <div className="col-md-4"><h3 style={{color:'#eb5b33'}}>Command Center Administrator</h3></div>
          <div className="col-md-4"><p className='fs-3 text-muted'>Agility Logistic Parks</p></div>
          <div className="col-md-4"><p className='fs-3 text-muted'>As Sulay,Riyadh Province,Al Jahra Kuwait</p></div>
        </div>
        <hr />
        <div className="row mt-md-3 mt-2">
          <div className="col-md-4"><h3 style={{color:'#eb5b33'}}>Finance Exceutive</h3></div>
          <div className="col-md-4"><p className='fs-3 text-muted'>Agility Logistic Parks</p></div>
          <div className="col-md-4"><p className='fs-3 text-muted'>As Sulay,Riyadh Province,Al Jahra Kuwait</p></div>
        </div>
        <hr />
        <div className="row mb-md-3 mb-2 d-flex justify-content-around">
          <div className="col-md-4 mb-3">
            <button type='button' className='border-0 w-100 p-3 text-white fw-bold' style={{backgroundColor:'#eb5b33'}}>View all Jobs Opening</button>
          </div>
          <div className="col-md-6 mb-3">
            <button type='button' className='border-0 w-100 p-3 text-white fw-bold' style={{backgroundColor:'#565554'}}>SUBMIT RESUME TO JOIN OUR TALENT WORK</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
