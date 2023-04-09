import { useState } from 'react'
import NewMessageForm from './NewMessageForm'
import MessageList from './MessageList'

export default function App () {
  const [messages, setMessage] = useState([])

  function handleSend (newMessage) {
    setMessage([newMessage, ...messages])
  }

  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </>
  )
}
