import React from 'react'
import {Link} from 'react-router-dom'

import a1 from '../../Images/a1.png'
import a2 from '../../Images/a2.png'
import a3 from '../../Images/a3.png'

export default function AboutUs() {
    const json = [
        {img: a1, title: 'Every job is professional', content: 'If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it.'},
        {img: a2, title: 'Best Materials', content: 'We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.'},
        {img: a3, title: 'Professional Standards', content: 'Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem.'}
    ]
    const aboutList = json.map(({img, title, content}, index)=>(
        <div className="col-4 col-l-6 col-m-12 col-s-12 padding-all-5" key={index}>
            <div className="width-35 width-lx-45 width-s-40 margin-auto">
                <img src={img} alt="" className="max-img" />
            </div>
            <div className="uppercase font-circular center-text">{title}</div><br />
            <div className="font-14 about-text center-text">{content}</div>
        </div>
    ))
  return (
    <div>
        <div className="padding-all-10 width-55 width-lx-80 width-l-100 width-m-100 width-s-100 margin-auto">
            <div className="center-text font-50 font-circular bold-text">About Us</div>

            <div>
                <div className="padding-all-10"></div>
                <div className="font-helvetica center-text about-text">
                    Garage is an auto tech platform that connects fleet owners to maintenance services and
                    affordable parts. We are building the largest auto tech platform to increase access to affordable,
                    functioning and eco-friendly vehicles in Africa. We are focused on differentiating ourselves
                    through deep data operations and community driven growth.
                </div>
                <div className="padding-all-10"></div>
            </div>
        </div>

        <div className="padding-all-10"></div>

        <div className="row justify-content-space-around">{aboutList}</div><br />

        <div className="padding-all-10"></div>

        <div className="center-text"><Link to="/garage" className="read-more">Read More</Link></div>

        <div className="padding-all-20"></div>
    </div>
  )
}
