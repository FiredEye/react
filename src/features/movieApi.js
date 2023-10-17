import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const movieApi=createApi({
    reducerPath:'movieApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder)=>({

        movieByCategory:builder.query({
            query:(query)=>({
                url:`movie/${query}`,
                params:{
                    api_key:`702d69322b5b2899e156bc7401dbb30d`
                }
            }),
            
        })

    })
})
export const {useMovieByCategoryQuery}=movieApi