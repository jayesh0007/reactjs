import React from 'react'
import Child from './Child'

function Parent({user}) {
  return (
    <div>
        <h1>I am Parent</h1>
        <Child user={user}/>
    </div>
  )
}

export default Parent
