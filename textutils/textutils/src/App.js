import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar title = "TextUtils"></Navbar>
    {/* conatiner mule te center la gela */}
    <div className='container'><TextForm heading="Enter Your Text"></TextForm></div> 
    <About></About>
    </>
  );
}

export default App;
