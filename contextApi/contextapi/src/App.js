import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import {UserProvider} from './contexts/UserContext';

function App() {
  return (
    <>
    <UserProvider>
      <Parent/>
    </UserProvider>
    
    </>
  );
}

export default App;
