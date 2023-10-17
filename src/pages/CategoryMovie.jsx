import React from 'react'
import { useMovieByCategoryQuery } from '../features/movieApi';
import Loading from '../components/LoadingPage';
import Error from '../components/ErrorPage';
import { Image, Shimmer } from 'react-shimmer';
import { useParams } from 'react-router-dom';

const CategoryMovie = () => {
  const {category}=useParams()
    const {data,isLoading,error,isError}=useMovieByCategoryQuery(category || 'now_playing');
   
    if(isLoading) return<Loading/>
    
    if(isError) return<Error error={error}/>
    
      return (<div className='grid grid-cols-3 gap-3 justify-around'>
        {data.results.map((movie,i)=>(
          <div key={i} className='mb-[20px] flex flex-col items-center gap-[14px] px-[30px]'>
            <h1>Title: {movie.title}</h1>
            <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie image" width={300}  height={340} className='rounded'
            fallback={<Shimmer width={300} height={450} className="rounded" />}
         
          />
            <p className='text-justify'>{movie.overview.substring(0,100)+`...`}</p>
          </div>
        ))}
        </div>
      );
    };

export default CategoryMovie