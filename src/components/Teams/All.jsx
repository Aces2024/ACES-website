import React from 'react'
import Pic from './Pic'
import Team from './Team'
import { Route, Routes } from 'react-router-dom'
import Technical from './Technical'
import Management from './Management'
import Cultural from './Cultural'
import Sports from './Sports'


function All() {
  return (
    <>
    <Pic/>
    <Team/>
    </>
  )
}

export default All