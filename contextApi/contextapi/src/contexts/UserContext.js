import React, {useState, createContext} from 'react'

export const  UserContext = createContext();

export function UserProvider({children}) {

    const[user] = useState({name:'Jay',age:26});

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

