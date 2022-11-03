import './App.css';
import Board from './components/Board';
import { boardDefault } from './components/helpers/Words';
import Keyboard from './components/Keyboard';
import { createContext, useState } from 'react';

//have access to const in all components
export const AppContext = createContext();

export default function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Waffle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
      <Board />
      <Keyboard />
      </AppContext.Provider>
      
    </div>
  );
}

