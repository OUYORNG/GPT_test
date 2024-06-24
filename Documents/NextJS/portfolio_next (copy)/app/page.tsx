import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Aboutme from './Aboutme'
import Portfolio from './Portfolio'

function page() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Aboutme/>
      <Portfolio/>
    </div>
  )
}

export default page