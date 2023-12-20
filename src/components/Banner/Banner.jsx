import React,{useEffect} from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../constants/constants'
import axios from '../axios'
import {useState} from 'react'


function Banner() {

  const [movie, setMovie] = useState()
  
  useEffect(() => {

   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    /* console.log(response.data.results[0])
    setMovie(response.data.results[6]) */
     
    const data = response.data.results;
      const randomIndex = Math.floor(Math.random() * data.length); // Generate a random index
      const randomMovie = data[randomIndex];
      setMovie(randomMovie);

   })
   
  }, [])
  




  return (
    <div
      style={{backgroundImage:`URL(${movie ? imageUrl+movie.backdrop_path : ""})`}}
      className='banner' >
         
     <div className='content' >

        <h1 className='title'>{movie ? movie.title:""} </h1>
        <div className='buttons'>
            <button className='button' style={{backgroundColor:"red"}} >Play  <i class="fa-solid fa-play"></i></button>
            <button  className='button' >My List</button>
        </div>
        <h1 className='description'>
           {movie ? movie.overview.slice(0,150):""}
        </h1>
     </div>

     <div className="fade">
        
     </div>

    </div>
  )
}

export default Banner