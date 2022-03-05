import React, {useState} from 'react'
import PostHeader from './PostHeader'
import AddPost from './AddPost'
import AddTopButton from './AddTopButton'
import Posts from './Posts'
import MyContext from '../config/MyContext'

export default function Post() {
    const [add, setAdd] = useState(false)
    const exportSetAdd = value => {
        setAdd(value)
    }
  return (
    <MyContext.Consumer>
        {(state)=>(
            <div id="post-body">
                <PostHeader>
                    <AddTopButton exportSetAdd={exportSetAdd} add={add} />
                </PostHeader>
                {add ? <AddPost exportSetAdd={exportSetAdd} add={add} /> : <div></div>}
                <div className="padding-all-20"></div>
                <div className="width-95 margin-auto padding-all-10">
                    <div className="font-circular bold-text font-20 uppercase">Garage Articles</div><br />
                    {state.postsLoaded ? <Posts /> : <div>Loading...</div>}
                </div>
            </div>
        )}
    </MyContext.Consumer>
  )
}
