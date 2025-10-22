import './App.css';
import Parent from './components/Parent'
import { useState } from 'react';

function App() {

  const[user] = useState({name:'Jay',age:26});

  return (
    <>
   <Parent user={user}/>
    </>
  );
}

export default App;
