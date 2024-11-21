import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { getAVideoAPI, getCategoryapi, removeCategoryAPI, removeVideoApi, saveCategorycomponent, UpdateCategoryAPI } from '../Apiservices/allApi';
import Videocard from './Videocard';



function Category({setremoveCategoryresponse,deleteVideoCategoryResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const[categoryName,setcategoryName]=useState("")

const storeCategorydetails=async()=>{
  if(categoryName){
try {
  await saveCategorycomponent({categoryName,caption:[]})
  setcategoryName("")
  handleClose()
  getCategory()
  
} catch (error) {
  
}
  }
  else{
    alert("Please fill form")
  }
}
const [allCategory,setAllcategory]=useState([])
console.log(allCategory);

useEffect(()=>{
getCategory()
},[deleteVideoCategoryResponse])

const getCategory=async()=>{

try {
const result= await getCategoryapi()
 setAllcategory(result.data)

 
} catch (error) {
  console.log(error);
  
}

}


const handleremoveCategory=async(videocategoryId)=>{
  try {
    await removeCategoryAPI(videocategoryId)
    getCategory()
  } catch (error) {
    console.log(error);
    
  }
}
  const dragOverCategory=(e)=>{
    e.preventDefault()
    console.log("dragging over category");
    
  }
  const videoDropped=async(e,categoryId)=>{
    const videoId=e.dataTransfer.getData("videoId")
console.log(`video id ${videoId} dropped in ${categoryId} `);
try {
  const {data}=await getAVideoAPI(videoId)
console.log(data);
let selecetedCategory= allCategory?.find(item=>item.id==categoryId)
selecetedCategory.caption.push(data)
console.log(selecetedCategory);
await UpdateCategoryAPI(categoryId,selecetedCategory)
const result= await removeVideoApi(videoId)
setremoveCategoryresponse(result)
getCategory()


} catch (error) {
  console.log(error);
  
}


  }


const videoDragStarted=(e,videodetails,categoryId)=>{
  console.log(videodetails,categoryId);
  
  console.log("videodrag started from category");
  
let dataShare={categoryId,videodetails}
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
}


  return (
  <>
<div className="d-flex justify-content-around">
  <h3>Category</h3>
  <button onClick={handleShow} style={{width:"50px",height:"50px"}} className='btn btn-secondary rounded-circle fs-5 ms-3 '>+</button>

</div>
<div className="container-fluid mt-3">
{
  allCategory.length>0?
  allCategory?.map(item=>(
    <div droppable={true} onDragOver={e=>dragOverCategory(e)} onDrop={e=>videoDropped(e,item?.id)} className='border rounded mb-2 p-3'>
<div className='d-flex justify-content-between'>
<h5>{item?.categoryName}</h5>
<button onClick={()=>handleremoveCategory(item?.id)} ><i class="fa-solid fa-trash text-danger"></i></button>
</div>
<div className="row mt-2">
  {
    item.caption?.length>0 &&
    item.caption?.map(video=>(
      <div draggable={true} onDragStart={e=>videoDragStarted(e,video,item.id)} key={video?.id} className='col-lg-6'> 
      <Videocard displyvalue={video} insideVideoCategory={true}/>
      </div>
    ))
  }
</div>
    </div>
  ))
:
<div>no category added</div>
}
</div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Details"
        className="mb-3"
      >
        <Form.Control onChange={e=>setcategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={storeCategorydetails} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

  </>
  )
}

export default Category
