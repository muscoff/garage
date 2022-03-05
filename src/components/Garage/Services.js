import React from 'react'
import p1 from '../../Images/p1.png'
import p2 from '../../Images/p2.png'
import p3 from '../../Images/p3.png'
import p4 from '../../Images/p4.png'
import p5 from '../../Images/p5.png'
import p6 from '../../Images/p6.png'

export default function Services() {
    const serJson = [
        {img: p1, title: 'CAR AUDIO SERVICE', content: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'},
        {img: p2, title: 'FREE OIL CHANGE', content: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'},
        {img: p3, title: 'ENGINE DIAGNOSTICS', content: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'},
        {img: p4, title: 'CAR A/C RECHARGE', content: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'},
        {img: p5, title: 'PARKING SENSORS CALIBRATION', content: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'},
        {img: p6, title: 'CAR BATTERY REPAIRS', content: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'}
    ]

    const services = serJson.map(({img, title, content}, index)=>(
        <div className="col-4 col-lx-6 col-l-6 col-m-12 col-s-12 padding-all-10" key={index}>
            <div className="uppercase">{title}</div>
            <div className="row">
                <div className="col-2 col-l-3 col-s-3 padding-all-2">
                    <div><img src={img} alt="" className="max-img" /></div>
                </div>
                <div className="col-10 col-l-9 col-s-9 padding-all-2">
                    <div className="font-14">{content}</div>
                </div>
            </div>
        </div>
    ))
  return (
    <div className="font-helvetica" style={{ backgroundColor: 'orange' }}>
        <div className="padding-all-20"></div>
        <div className="font-50 center-text bold-text font-circular">Products and Services</div>
        <div className="center-text">We can handle any problem on both foreign and domestic vehicles.</div><br />
        <div className="padding-all-10"></div>

        <div className="width-90 margin-auto">
            <div className="row justify-content-space-around">{services}</div>
        </div>

        <div className="padding-all-20"></div>
    </div>
  )
}
