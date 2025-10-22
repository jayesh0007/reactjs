import React, {useState} from "react";
import Modal from "./Components/Modal";

function App() {

const[isModalOpen,setisModalOpen] = useState(false);

  return (
    <>
    <h1>Welcome to Portal</h1>
    <button onClick={()=>{setisModalOpen(true)}}>Open Modal</button>
    <Modal isOpen={isModalOpen}>
      <h2>hello i am modal</h2>
    <button onClick={()=>{setisModalOpen(false)}}>Close Modal</button>
    </Modal>
    </>
  );
}

export default App;
