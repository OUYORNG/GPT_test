import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Aboutme from './Aboutme'
import Portfolio from './Portfolio'
import { AuroraBackground } from '@/components/ui/aurora-background'
import {motion} from 'framer-motion'
import Test from './Test'

function page() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Aboutme/>
      <Portfolio/>
      <Test/>
    </div>
  )
}

export default page