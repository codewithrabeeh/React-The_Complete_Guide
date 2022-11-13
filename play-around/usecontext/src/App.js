import './App.css';
import React from 'react'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import CounterProvider from './store/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CounterProvider>
  );
}

export default App;
