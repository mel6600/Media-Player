import commonAPI from "./commonapi"
import SERVER_URL from "./serverurl"


//api to add video
export const  addVideoAPI=async(video)=>{
return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)

}


//api to get video

export const getVideoApi=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
}

export const removeVideoApi=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${videoId}`,{})
}
export const saveHistoryApi=async(video)=>{
return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

export const getVideoHistoryApi =async()=>{
return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

export const removeVideoWatchhistory= async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

export const saveCategorycomponent=async(categoryDetails)=>{
    await commonAPI("POST",`${SERVER_URL}/category`,categoryDetails)
}

export const getCategoryapi=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

export const removeCategoryAPI=async(videocategoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${videocategoryId}`,{})
    }

    export const getAVideoAPI=async(videoId)=>{
        return await commonAPI("GET",`${SERVER_URL}/allvideos/${videoId}`,"")
    }


    export const UpdateCategoryAPI=async(categoryId,categoryIdDetails)=>{
        return await commonAPI("PUT",`${SERVER_URL}/category/${categoryId}`,categoryIdDetails)
    }

    export const getSinglecategoryAPI=async(categoryId)=>{
        return await commonAPI("GET",`${SERVER_URL}/category/${categoryId}`,"")
    }

