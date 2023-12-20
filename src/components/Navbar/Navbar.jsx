import React from 'react'
import './Navbar.css'
import { useState,useEffect } from 'react'

function Navbar() {
  const [show, setShow] = useState(false) 

  useEffect(()=>{

    window.addEventListener('scroll',()=>{                              
      if(window.scrollY>600){
        setShow(true)                                  

      }
      else{
        setShow(false)
      }
    })

  })
  return (
    <div className={`${show && 'nav-black'} nav`} >
    <img width={'130px'} style={{background:"transparent"}} src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt="" />
    <img style={{background:"transparent"}} width={'30px'} src="https://tse3.mm.bing.net/th?id=OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa&pid=Api&P=0&h=220" alt="" />
  </div>
)
}

export default Navbar


     