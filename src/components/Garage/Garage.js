import React from 'react'
import AboutUs from './AboutUs'
import BackgroundPartion from './BackgroundPartion'
import Contact from './Contact'
import GarageHead from './GarageHead'
import Services from './Services'

export default function Garage() {
  return (
    <div>
        <GarageHead />
        <div className="width-90 margin-auto">
            <AboutUs />
        </div>
        <Services />
        <BackgroundPartion />
        <div className="black-bg">
            <div className="padding-all-20"></div>
            <Contact />
            <div className="padding-all-20"></div>
        </div>
    </div>
  )
}
