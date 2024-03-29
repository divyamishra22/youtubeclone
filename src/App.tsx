
import React from 'react';
import './App.css';
import Navbar from './components/Navbar.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/reducers/index.ts';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <Navbar/>
      </Provider>
    </div>
  );
}

export default App;
