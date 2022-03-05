import React, {useState} from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [note, setNote] = useState('')

  const sendMessage = e => {
    e.preventDefault();
    if(email && message){
      console.log({email, message})
      setEmail('')
      setMessage('')
      setNote('Message sent')
      setTimeout(()=>setNote(''),4000)
    }else{
      setNote('Please supply your email and message to proceed')
      setTimeout(()=>setNote(''),4000)
    }
  }
  return (
    <div id="contact" className="white-text">
        <div className="font-circular center-text font-50 bold-text">Contact Us</div>

        <div className="width-40 width-lx-50 width-l-70 width-m-80 width-s-90 margin-auto">
            <div className="center-text margin-auto">
                Reach out to our responsive customer service representatives for quick resolution of any problems you may have
            </div><br />

            <form className="contact" onSubmit={sendMessage}>
                <div>Email</div>
                <div><input type="email" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email address" /></div><br />

                <div>Message</div>
                <div><textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type message here.." /></div>
                <div>{note}</div><br />

                <div className="flex-row-reverse"><button>Send Message</button></div>
            </form>
        </div>
    </div>
  )
}
