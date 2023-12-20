 import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Banner from './components/Banner/Banner'
import Row from './components/Rowpost/Row'
import {action,originals,trending,rated, comdey, horror, romance, documentries} from './components/Urls'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Row url={originals}  title='Netflix Originals' />
      <Row  url={action} title='Action Movies' isSmall />
      <Row  url={trending} title='Trendings' isSmall />
      <Row  url={rated} title='Top Rated' isSmall />
      <Row  url={comdey} title='Comedy Movies' isSmall />
      <Row  url={horror} title='Horror Movies' isSmall />
      <Row  url={romance} title='Romance Movies' isSmall />
      <Row  url={documentries} title='Documentaries' isSmall />


    </div>
  )
}

export default App 

/* import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [state, setState] = useState([])
  return (
    <div>
      <h1>hello world</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            
        console.log(response.data);
        setState(response.data)

        })
      }}>clicke me</button>

      {state.map((obj,index)=>{
        return(

          <div>
            <h1>{index+1}</h1>
            <h3>{obj.title}</h3>
            <h4>{obj.body} </h4>
          </div>
        )
      })}
    </div>
  )
}

export default App */