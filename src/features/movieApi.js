import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { api_key ,baseUrl } from "./constant"

 export const movieApi=createApi({
    reducerPath:'movieApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({

        movieByCategory:builder.query({
            query:(query)=>({
                url:`movie/${query}`,
                params:{
                    api_key
                }
            }),
            
        }),
        getMovieDetail:builder.query({
            query:(query)=>({
                url:`movie/${query}`,
                params:{
                    api_key
                }
            }),
            
        }),
        videoById:builder.query({
            query:(query)=>({
                url:`movie/${query}/videos`,
                params:{
                    api_key
                }
            }),
            
        }),
        movieBySearch:builder.query({
            query:(query)=>({
                url:`search/movie`,
                params:{
                    api_key,
                    query
                }
            }),
            
        })

    })
})
export const {useMovieByCategoryQuery,useGetMovieDetailQuery,useVideoByIdQuery,useMovieBySearchQuery}=movieApi