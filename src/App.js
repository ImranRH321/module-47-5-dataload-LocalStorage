import React from 'react';
import './App.css'
import Cousmetics from './componets/Cousmetics/Cousmetics';
import Shops from './componets/Shops/Shops';

const App = () => {
  return (
    <div className='App'>
     <Cousmetics></Cousmetics>
     {/* <Shops></Shops> */}
    </div>
  );
};

export default App;