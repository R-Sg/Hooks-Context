import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import CompA from './components/CompA';

const FirstName = createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Rohit"}>
        <CompA />
      </FirstName.Provider>
    </div>
  );
}

export default App;
export {FirstName};