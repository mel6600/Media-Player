import axios from "axios";

const commonAPI= async(method,url,reqBody)=>{
    const reqConfig={
        method,
        url,
        data:reqBody
    }
  return await axios(reqConfig).then(res=>{
        return res
        
    }).catch(res=>{
        return res
    })
}
export default commonAPI