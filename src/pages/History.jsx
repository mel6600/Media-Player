import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getVideoHistoryApi, removeVideoWatchhistory } from '../Apiservices/allApi'




function History() {

const[historyresponse,sethistoryresponse]=useState([])
console.log(historyresponse);

useEffect(()=>{
  getAllhistory()
},[])
const getAllhistory=async()=>{
 try {
const result=  await getVideoHistoryApi()
console.log(result);

 sethistoryresponse(result.data)

  
 } catch (err) {
  console.log(err);
  
 }
}


const   removeHist=async(videoId)=>{
  try {
    await removeVideoWatchhistory(videoId)
    getAllhistory()
  } catch (err) {
    console.log(err);
    
  }

 }
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>


      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Caption
            </th>
            <th>
              Video Link
            </th>
            <th>
              Time Stamp
            </th> 
            <th>
              <i className='fa-solid fa-ellipsis-vertical'></i>
            </th>
          </tr>
        </thead>
        <tbody>
     {
      historyresponse.length>0?
      historyresponse?.map((item,index)=>(
        <tr key={item?.id}>
        <td>
          {index}
        </td>
        <td>
        {item?.caption}
        </td>
        <td>
          <a href="https://www.youtube.com/embed/tOM-nWPcR4U?autoplay=1" target='_blank'>{item?.youtubeUrl}</a>
        </td>
        <td>
        {item?.timestamp}
        </td>
        <td>
          <button onClick={()=>removeHist(item?.id)}  className='btn '><i className='fa-solid fa-trash text-danger'></i></button>
        </td>
      </tr>
      ))
      :<div>item not available</div>
     }
        </tbody>
      </table>
    </div>
  )
}

export default History
