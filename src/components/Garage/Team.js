import React from 'react'
import Title from './Title'
import user from '../../Images/user.png'

export default function Team() {
    const teams = [
        {img: user, name: 'Gana Gana', title: 'Co-founder', email: 'gana@example.com', intro: 'Digital technology is a remarkable tool for the promotion of equal opportunities. Applying my expertises to the mission of discovering and promoting artists around the world seemed only logical'},
        {img: user, name: 'Cedric Cedric', title: 'Co-founder', email: 'cedric@example.com', intro: 'Digital technology is a remarkable tool for the promotion of equal opportunities. Applying my expertises to the mission of discovering and promoting artists around the world seemed only logical'},
        {img: user, name: 'Mustapha Mustapha', title: 'Software Engineer', email: 'mustapha@example.com', intro: 'Digital technology is a remarkable tool for the promotion of equal opportunities. Applying my expertises to the mission of discovering and promoting artists around the world seemed only logical'}
    ]
    const teamList = teams.map(({img, name, title, email, intro}, index)=>(
        <div className="col-4 col-lx-6 col-l-6 col-m-12 col-s-12 padding-all-10" key={index}>
            <div className="user">
                <img src={img} alt="" className="max-img" />
            </div><br />
            <div className="font-20 bold-text font-circular">{name}</div>
            <div className="title font-14 font-helvetica bold-text margin-bottom-10">{title}</div>
            <div className="font-helvetica margin-bottom-10">{intro}</div>
            <div>
                <a href={`mailto:${email}`}>
                    <i className="fi fi-rr-envelope title font-20"></i>
                </a>
            </div>
        </div>
    ))
  return (
    <div className="off-white-bg">
        <div className="padding-all-20"></div>
        <Title title="The Garage Team" />
        <div className="padding-all-10"></div>

        <div className="width-90 margin-auto">
            <div className="row justify-content-space-around">{teamList}</div>
        </div>

        <div className="padding-all-20"></div>
    </div>
  )
}
