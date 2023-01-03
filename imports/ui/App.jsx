import React from 'react';
import { Hello } from './Hello.jsx';
import { Home } from './Home.jsx';
import { Info } from './Info.jsx';
import { Sidebar } from './Sidebar.jsx';

export const App = () => (
  <div>
    <Sidebar/>
    
    <div class="main-content">

      <Home/> 

    </div>
    
  </div>
);
