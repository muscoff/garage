import React, { Component } from 'react'
import MyContext from './MyContext'
import pseudoPost from './pseudoPost'

export default class MyProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            postMsg: '',
            postsLoaded: false
        }
    }

    componentDidMount(){
        this.getPosts()
    }

    async getPosts(){
        try{
            const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
            this.setState({posts, postsLoaded: true})
        }catch(e){
            this.setState({posts: pseudoPost, postsLoaded: true})
            console.log('network error...')
        }
    }

    async postPost({title, body}){
        try{
            const options = {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify({title, body, userId: 1})
            }
            const result = await (await fetch('https://jsonplaceholder.typicode.com/posts', options)).json()
            console.log('result', result)
            this.setState({postMsg: 'Post added'})
            setTimeout(()=>this.setState({postMsg: ''}),4000)
        }catch(e){
            this.setState({postMsg: 'Network error... Try again'})
            setTimeout(()=>this.setState({postMsg: ''}),4000)
        }
    }

  render() {
    return (
      <MyContext.Provider value={{
          posts: this.state.posts,
          postsLoaded: this.state.postsLoaded,
          postMsg: this.state.postMsg,
          postPost: obj=>this.postPost(obj)
      }}>
          {this.props.children}
      </MyContext.Provider>
    );
  }
}
