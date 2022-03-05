import React from 'react'
import {Link} from 'react-router-dom'

export default function Intro() {
  return (
    <div className="intro intro-bg">
        <div className="padding-50"></div>
        <div className="font-70 font-circular center-text white-text">Garage</div>
        <div className="padding-all-30"></div>
        <div className="width-30 width-lx-45 width-l-80 width-m-70 width-s-90 margin-auto">
            <div className="row justify-content-space-between">
                <div className="padding-all-10 col-l-6 col-m-12 col-s-12">
                    <Link to="/post">
                        <div className="touch-title">Post</div>
                    </Link>
                </div>
                <div className="padding-all-10 col-l-6 col-m-12 col-s-12">
                    <Link to="/garage">
                        <div className="touch-title">Landing Page</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="padding-all-50"></div>
    </div>
  )
}
