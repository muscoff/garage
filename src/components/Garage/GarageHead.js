import React from 'react'
import {Link} from 'react-router-dom'

export default function GarageHead() {
  return (
    <div className="black-bg padding-all-10 white-text">
        <div className="width-90 margin-auto">
            <div className="row align-items-center justify-content-space-between">
                <div className="font-circular bold-text font-20">Garage</div>

                <div className="">
                    <div className="hide-on-media">
                        <div className="flex-row">
                            <Link to="/garage" className="link">About us</Link>
                            <Link to="/garage" className="link">Services</Link>
                            <Link to="/garage" className="link">Testimonies</Link>
                            <Link to="/garage" className="link">Contact us</Link>
                        </div>
                    </div>
                    <div className="show-on-media">
                        <i className="fi fi-rr-menu-burger"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
