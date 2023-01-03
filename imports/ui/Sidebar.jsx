import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Sidebar = () => {
  
  return (
    <div>
      
      <aside class="sidebar-left">
        <img src="logo.png" class="icon" />
        <a class="company-logo" href="#">Fabrice</a>
        <div class="sidebar-links">
          <a class="link-red" href="#" id="profile-link"><i class="fa fa-user"></i>Profile</a>
          <a class="link-blue" href="#" id="jokes-link"><i class="fa fa-comments-o"></i>Comments</a>
          <a class="link-yellow" href="#" id="rankings-link"><i class="fa fa-trophy"></i>Trophy</a>
          <a class="link-green" href="#" id="search-link"><i class="fa fa-search"></i>Search</a>
        </div>

      </aside>
  
    </div>
  );
};
