import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form, FloatingLabel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoAPI } from '../Apiservices/allApi';


function Add({setaddVideoresponse}) {


  // .......................................................................
const[invalidurl,setinvalidurl]=useState(false)
const[videodetails,setvideodetails]=useState({
  caption:"",
  imageurl:"",
  youtubeUrl:""

})


// .......................................................................
const handleUpload=async()=>{
  console.log("inside handle upoload");
  const{caption,imageurl,youtubeUrl}=videodetails
  if (caption&&imageurl&&youtubeUrl){
// console.log("make api call");
try{
const result=await addVideoAPI(videodetails)
console.log(result);

if (result.status>=200&& result.status<300){
  console.log(result.data);
  setaddVideoresponse(result.data)
  setvideodetails( {caption:"",
    imageurl:"",
    youtubeUrl:""
})
  toast.success(`${result.data.caption}added to your collection`)
  handleClose()
}
else{
  toast.error(result.response.caption)
}
}
catch(err){

console.log(err);

}

  }
  else{
   toast.warning("Fill the form correctly")
  }
  
}

// .............................................................


const  getEmbed=(link)=>{
  if (link.includes("v=")){
  let  value=link.split("v=")[1].slice(0,11)
    console.log(value);
    setvideodetails({...videodetails,youtubeUrl:`https://www.youtube.com/embed/${value}`})
    setinvalidurl(false)
  }
  else{
  setvideodetails({...videodetails,youtubeUrl:""})
  setinvalidurl(true)
    
  }
  }


// ..................................................................



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
// ........................................................................

  return (

<>
<div className="class container d-flex justify-conent-center">
        <h5>Upload a new video</h5>
        <button onClick={handleShow} className='btn btn-secondary rounded-circle fs-5 ms-3 '>+</button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following!!!</p>
        <div className=' border rounded p-2'>
            <FloatingLabel
          controlId="floatingInputcaption"
          label="caption"
          className="mb-3"
        >
          <Form.Control onChange={e=>setvideodetails({...videodetails,caption:e.target.value})} type="text" placeholder="caption" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputimage"
          label="imageurl"
          className="mb-3"
        >
          <Form.Control onChange={e=>setvideodetails({...videodetails,imageurl:e.target.value})} type="text" placeholder="imageurl" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputvideo"    
          label="videourl"
          className="mb-3"
        >
          <Form.Control onChange={e=>getEmbed(e.target.value)} type="text" placeholder="videourl" />
        </FloatingLabel>
        {
          invalidurl && 
          <div style={{color:"red"}}>
            Invalid Youtube Link
          </div>
        }
  
        </div>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
         Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
position="top-center"
autoClose={3000}

theme="colored"

/>
    </>
  )
}

export default Add
