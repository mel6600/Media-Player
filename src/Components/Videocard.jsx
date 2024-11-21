import React,{ useState } from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoApi, saveHistoryApi } from '../Apiservices/allApi';


function Videocard({displyvalue,setdeleteResponse,insideVideoCategory}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () =>{ 
      setShow(true);
      const date = new Date();
const formattedDate = date.toLocaleString('en-US', { timeZoneName: 'short' });
console.log(formattedDate);


     const {caption,youtubeUrl}=displyvalue
    const historyVideo={caption,youtubeUrl,timestamp:formattedDate}

  try {
  await  saveHistoryApi(historyVideo)
  } catch (err) {
    console.log(err);
    
  }
    }

const handleRemoveVideo=async(videoId)=>{
  
try{
  const result=await removeVideoApi(videoId)
  console.log(result.data);
  setdeleteResponse(result.data)
  
}
catch (err){
console.log(err);

}
}

const dragStarted=(e,videoId)=>{
  console.log(`Dragging started with videoId ${videoId}`);
  e.dataTransfer.setData("videoId",videoId)
  
}

  return (
   <>
 <Card draggable={true} onDragStart={e=>dragStarted(e,displyvalue?.id)}>
      <Card.Img onClick={handleShow} variant="top" src={displyvalue?.imageurl} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <p>{displyvalue?.caption}</p>
          {!insideVideoCategory && <button onClick={()=>handleRemoveVideo(displyvalue?.id)} className='btn '><i className='fa-solid fa-trash text-danger'></i></button>}
        </Card.Title>
        <Card.Text>
   
        </Card.Text>

      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="250px" src={`${displyvalue?.youtubeUrl}?autoplay=1`} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
    
      </Modal>
   </>
  )
}

export default Videocard
