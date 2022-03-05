import React from 'react'
import bg from '../../Images/bg.jpg'

const bgStyle = {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
}

export default function BackgroundPartion() {
  return (
    <div className="width-100 height-30" style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`, ...bgStyle }}></div>
  )
}
