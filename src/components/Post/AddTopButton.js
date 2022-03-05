import React from 'react'
import Script from '../../script/Script'

export default function AddTopButton({exportSetAdd, add}) {
  const script = new Script()
  return (
    <div className="add-post-btn" onClick={()=>{exportSetAdd(!add); script.postBody()}}><i className="fi fi-rr-plus"></i> Add Post</div>
  )
}
