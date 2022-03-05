import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Intro from './components/Intro'
import PostIndex from './components/PostIndex'
import GarageIndex from './components/GarageIndex'

export default function RouteLink() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/post" element={<PostIndex />} />
                <Route path="/garage" element={<GarageIndex />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
