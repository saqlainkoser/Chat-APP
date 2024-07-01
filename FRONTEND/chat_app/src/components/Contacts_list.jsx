import React from 'react'

//React Chat Element
import 'react-chat-elements/dist/main.css'

function Contacts_list() {
  return (
    <div>
      
    </div>
  )
}

export default Contacts_list

import { ChatList } from 'react-chat-elements'

<ChatList
    className='chat-list'
    dataSource={[
        {
            avatar: 'https://facebook.github.io/react/img/logo.svg',
            alt: 'Reactjs',
            title: 'Facebook',
            subtitle: 'What are you doing?',
            date: new Date(),
            unread: 0,
        },
    ]} />