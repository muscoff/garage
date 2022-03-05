import React from 'react'
import AboutUs from './AboutUs'
import BackgroundPartion from './BackgroundPartion'
import Contact from './Contact'
import GarageHead from './GarageHead'
import Services from './Services'
import Team from './Team'

export default function Garage() {
  return (
    <div>
        <GarageHead />
        <BackgroundPartion className="width-100 height-60 flex-column justify-content-center align-items-center">
            <div className="center-text white-text">
                <div className="font-70 font-circular uppercase">Garage</div>
                <div className="capitalize font-50 font-m-30 font-s-25 font-circular">Africa's Largest auto tech platform</div>
            </div>
        </BackgroundPartion>
        <div className="width-90 margin-auto">
            <AboutUs />
        </div>
        <Services />
        <BackgroundPartion />
        <Team />
        <div className="black-bg">
            <div className="padding-all-20"></div>
            <Contact />
            <div className="padding-all-20"></div>
        </div>
    </div>
  )
}
