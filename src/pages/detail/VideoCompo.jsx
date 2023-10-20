import React from 'react'
import { useVideoByIdQuery } from '../../features/movieApi'
import ErrorPage from "../../components/ErrorPage"

const VideoCompo = ({id}) => {
const {isLoading,data,isError,error}=useVideoByIdQuery(id);

if(isLoading){
    return <div>Loading..</div>
}

if(isError){
    return <ErrorPage error={error}/>
}

  return (
    <div>
        <iframe className='w-[50%] aspect-video' src={`https://www.youtube.com/embed/${data?.results[0]?.key}`} frameBorder="0"></iframe>
    </div>
  )
}

export default VideoCompo
