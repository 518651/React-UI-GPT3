import React from 'react'
import { Blog, Feature, Footer, Header, Possibility, WhatGPT3} from './containers'
import {Brand,Cta,Navbar} from './components'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
