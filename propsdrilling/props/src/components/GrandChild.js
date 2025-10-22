import React from 'react'

function GrandChild({user}) {
  return (
    <div>
      <h1>I am GrandChild</h1>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
    </div>
  )
}

export default GrandChild
