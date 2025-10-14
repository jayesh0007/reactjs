import './App.css';
import Header from './components/Header';
import Middle from './components/Middle';

function App() {
  return (
    <div className="App">
      <Header greet='Morning' bye='byee'></Header>   {/* function based */}
      <Middle name='Jayesh'></Middle>  {/* class based */}
    </div>
  );
}

export default App;
