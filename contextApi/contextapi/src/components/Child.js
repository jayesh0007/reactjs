import React,{useContext} from 'react'
import { UserContext } from '../contexts/UserContext'

function Child() {

    const user = useContext(UserContext);

  return (
    <div>
      <h1>I am Child</h1>
      <p> Hello {user.name}</p>
    </div>
  )
}

export default Child
