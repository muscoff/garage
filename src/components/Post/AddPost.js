import React, {useState, useEffect} from 'react'
import CloseTopButton from './CloseTopButton'
import PostHeader from './PostHeader'
import Script from '../../script/Script'
import MyContext from '../config/MyContext'

export default function AddPost({exportSetAdd, add}) {
    const script = new Script()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(()=>{
        script.addPostBreak()
    }, [])

    const submit = ({title, body}, cb) => {
        if(title && body){
            cb({title, body})
        }else{
            alert('Title and comment are required')
        }
    } 

  return (
    <MyContext.Consumer>
        {(state)=>(
            <div className="add-post-container">
                <PostHeader className="fixed top-0 z-index-1">
                    <CloseTopButton exportSetAdd={exportSetAdd} add={add} />
                </PostHeader>
                <div id="add-post-break"></div>
                <div className="padding-all-20"></div><br />
                <div className="width-30 width-lx-45 width-l-70 width-m-85 width-s-90 margin-auto padding-all-20 add-post-form-body">
                    <div className="font-helvetica font-20">New Post</div><br />
                    <div>
                        <form onSubmit={(e)=>{e.preventDefault(); submit({title, body}, state.postPost)}} className="add-post-form">
                            <div className="font-helvetica">Title</div>
                            <div>
                                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                            </div><br />

                            <div className="font-helvetica">Comments</div>
                            <div>
                                <textarea value={body} onChange={(e)=>setBody(e.target.value)} />
                            </div>
                            <div>{state.postMsg}</div><br />

                            <div className="flex-row-reverse"><button>Send Post</button></div>
                        </form>
                    </div>
                </div>
                <div className="padding-all-20"></div>
            </div>
        )}
    </MyContext.Consumer>
  )
}
