import React from 'react'
import Student1 from './Student1'
import Student2 from './Student2'
import Student3 from './Student3'

export default function App() {
  return (
    <div>
             <Student1/>  
             <Student2/>
             <Student3 name="Divya" roll={103}/>
    </div>
  )
}
