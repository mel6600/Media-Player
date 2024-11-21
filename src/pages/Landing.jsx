
import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../assets/music-beat.gif'
import Card from 'react-bootstrap/Card';
import settingsimg from '../assets/settingimg.gif'
import greenimg from '../assets/greenimg.gif'
import giphyimg from '../assets/giphy.gif'


function Landing() {
  return (
    <div className='container mt-5'>
<div className='row align-items-center '>
  <div className="col-lg-6">
  <h3 className='mt-5' >Welcome To<span className='text-warning'> Media Player</span></h3>
  <p className='mt-3' style={{textAlign:"justify"}}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt blanditiis harum nesciunt provident, dignissimos sint eveniet reiciendis velit ullam temporibus ratione quisquam laudantium eius optio ipsa recusandae voluptatem id...
  </p>
  <Link to={'/Home'} className='btn btn-info'>Get Started</Link>
  </div>
  <div className="col-lg-6">
<img src={landingImage} alt="" />
  </div>
</div>
{/* features ................................................................. */}
<div className='features-div my-5'>
  <h3 className='text-center'>FEATURES</h3>
  <div className="col d-flex justify-content-between my-5">
    <div className="row lg-4">
    <Card style={{ width: '22rem',height:"450px" }}>
      <Card.Img style={{height:"250px", width:"250px"}} variant="top" src={settingsimg} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
 
      </Card.Body>
    </Card>
    </div>
    <div className="row lg-4">
    <Card style={{ width: '22rem',height:"450px" }}>
      <Card.Img style={{height:"250px", width:"250px"}} variant="top" src={giphyimg} />
      <Card.Body>
        <Card.Title>  Categorise Videos</Card.Title>
        <Card.Text>
      
Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
 
      </Card.Body>
    </Card>
    </div>
    <div className="row lg-4">
    <Card style={{ width: '22rem',height:"450px" }}>
      <Card.Img style={{height:"250px", width:"250px"}} variant="top" src={greenimg} />
      <Card.Body>
        <Card.Title>  Watch History</Card.Title>
        <Card.Text>
      
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
 
      </Card.Body>
    </Card>
    </div>
  </div>
</div>
{/* last content ............................................................... */}
<div className="row  p-5 my-5 border rounded">
  <div className="col-lg-5">
    <h3 className='text-warning'>
      SIMPLE,FAST AND POWERFUL
    </h3>
    <p>
      <span style={{color:"white"}} className='fs-5 '>PLAY EVERYTHING:     </span><span style={{color:"white"}}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur illo totam tempore, quia!</span>
    </p>
    <p>
      <span style={{color:"white"}} className='fs-5 '>PLAY EVERYTHING:     </span><span style={{color:"white"}}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur illo totam tempore, quia!</span>
    </p>
    <p>
      <span style={{color:"white"}} className='fs-5 '>PLAY EVERYTHING:     </span><span style={{color:"white"}}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur illo totam tempore, quia!</span>
    </p>
  </div>
  <div className="col-lg"></div>
  <div className="col-lg-6">
  <iframe width="100%" height="322" src="https://www.youtube.com/embed/yjK9a7LtwfI" title="This Kerala Home is Perfectly Crafted for the Local Weather (House Tour)." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</div>
    </div>
  )
}

export default Landing




