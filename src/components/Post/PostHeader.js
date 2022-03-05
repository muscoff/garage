import React from 'react'

export default function PostHeader({children, className}) {
  return (
    <div id="post-header" className={className ? `width-100 black-bg white-text padding-all-10 ${className}` : 'width-100 black-bg white-text padding-all-10'}>
        <div className="width-95 margin-auto">
            <div className="row align-items-center justify-content-space-between">
                <div className="font-30 bold-text">Garage</div>
                {children}
            </div>
        </div>
    </div>
  )
}
