import React from 'react';
import Main from './layouts/Main';
import './App.css';
import {UserProvider} from "./context/UserContext"
// import ItemsCarousel from './pages/demo';

function App() {
  return (
    <>
    
      {/* <ItemsCarousel /> */}
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;