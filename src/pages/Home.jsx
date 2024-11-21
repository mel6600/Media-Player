import React, { useState } from "react"
import Add from "../Components/Add"
import { Link } from "react-router-dom"
import View from "../Components/View"
import Category from "../Components/Category"
function Home() {

  const[addVideoresponse,setaddVideoresponse]=useState("")
  const[removeCategoryresponse,setremoveCategoryresponse]=useState("")
  const[deleteVideoCategoryResponse,setdeleteVideoCategoryResponse]=useState("")

  return (
   
    <>
    <div className="container my-5 d-flex justify-content-between">
<Add setaddVideoresponse={setaddVideoresponse}/>
<Link to={'/History'}>History</Link>
    </div>
    <div className="container-fluid my-5 row">
<div className="col-lg-6">
<h3>All Videos</h3>
<View setdeleteVideoCategoryResponse={setdeleteVideoCategoryResponse} addVideoresponse={addVideoresponse} removeCategoryresponse={removeCategoryresponse}/>
</div>
<div className="col-lg-6">
<Category deleteVideoCategoryResponse={deleteVideoCategoryResponse} setremoveCategoryresponse={setremoveCategoryresponse} />
</div>
    </div>
    </>
  )
}

export default Home
