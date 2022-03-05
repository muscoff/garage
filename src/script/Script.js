export default function Script(){
    this.addPostBreak = function(){
        const postHeader = document.querySelector('#post-header')
        const postBreak = document.querySelector('#add-post-break')
        
        const postHeaderHeight = postHeader.offsetHeight
        postBreak.style.height = `${postHeaderHeight}px`
    }

    this.postBody = function(){
        const body = document.querySelector('#post-body')
        body.style.height = window.innerHeight + 'px'
        body.style.overflow = 'hidden'
    }

    this.reversePostBody = function(){
        const body = document.querySelector('#post-body')
        body.style.height = '100%'
        body.style.overflow = 'auto'
    }
}