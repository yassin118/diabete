import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div className='navbar'>
    
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/contacts">Contact</Link>
    </li>
    <li>
      <Link to="/blogs">Blogs</Link>
    </li>
    <li>
      <Link to="/aide">Aide</Link>
    </li>
    
  </div>
  );
}
export default navbar;