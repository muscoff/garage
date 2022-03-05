import React from 'react'
import Script from '../../script/Script'

export default function CloseTopButton({exportSetAdd, add}) {
  const script = new Script()
  return (
    <div className="add-post-btn" onClick={()=>{exportSetAdd(!add); script.reversePostBody()}}><i className="fi fi-rr-cross"></i></div>
  )
}
