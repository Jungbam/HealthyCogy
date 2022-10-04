import React, { useState } from 'react';

const Dropdown = ()=> {

  return (
    <div className="container">
  <input id="dropdown" type="checkbox" />
  <label className="dropdownLabel" for="dropdown">
    <div>CSS</div>
    <FaAngleDown className="caretIcon" />
  </label>
  <div className="content">
    <ul>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
      <li>Option 4</li>
    </ul>
  </div>
</div>
      );
   };
   export default Dropdown