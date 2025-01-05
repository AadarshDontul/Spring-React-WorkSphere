import { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <>
      <NavigationBar />
      <AddEmployee />
    </>
  );
}

export default App;
