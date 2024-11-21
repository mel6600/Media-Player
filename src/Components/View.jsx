import React, { useEffect, useState } from 'react'
import{Row,Col} from 'react-bootstrap'
import Videocard from './Videocard'
import { addVideoAPI, getSinglecategoryAPI, getVideoApi, UpdateCategoryAPI } from '../Apiservices/allApi'

function  View({addVideoresponse,removeCategoryresponse,setdeleteVideoCategoryResponse}) {
  const[deleteResponse,setdeleteResponse]=useState("")
const [Viewvideos,setViewvideos]=useState([])
console.log(Viewvideos);

useEffect(
  ()=>{
getAllvideos()
  },[addVideoresponse,deleteResponse,removeCategoryresponse]
)
const getAllvideos= async ()=>{
  try{
    const result=await getVideoApi()
    console.log(result);
    if(result.status>=200&&result.status<300){
      setViewvideos(result.data)
    }
    
  }
  catch(err){
console.log(err);

  }
}
const dragOverView=(e)=>{
  e.preventDefault()
}

const handleCategoryVideo=async(e)=>{
  const {categoryId,videodetails}=JSON.parse(e.dataTransfer.getData("dataShare") )
  console.log(categoryId,videodetails);
  try {
    const {data}=await getSinglecategoryAPI(categoryId)
    console.log(data);
    const updatedCategoryVideoList= data.caption.filter(item=>item.id!==videodetails.id)
    console.log(updatedCategoryVideoList);
    const {categoryName,id}=data
    const categoryResult=await UpdateCategoryAPI(categoryId,{id,categoryName,caption:updatedCategoryVideoList})
    setdeleteVideoCategoryResponse(categoryResult.data)
    await addVideoAPI(videodetails)
    getAllvideos()
    
    
  } catch (error) {
    console.log(error);
    
  }
  
}


  return (
<>
<Row droppable={true} onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
  {
    Viewvideos.length>0?
    Viewvideos?.map(video=>(
      <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
   
      <Videocard displyvalue={video} setdeleteResponse={setdeleteResponse} />
      </Col>
    ))
: <div>Nothing to Display</div>
}


</Row>

</>
  )
}

export default View
