import React from 'react';
import './../dropdown.css';

const Icon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
  };

let statuses = [];

function DropdownClick(activities, name){
  let status = false;
  for (let i = 0; i < statuses.length; i++){
    if (statuses[i][0] === name){
      status = statuses[i][1];
      statuses[i][1] = !statuses[i][1];
    }
  }
  console.log(status);
  let drops = document.getElementById("dropElements"+name);
  if (!status){
    for (let i = 0 ; i < activities.length; i++){
      let node = document.createElement("span");
      node.innerHTML = `${activities[i]}<br>`
      node.className = "dropper"
      drops.appendChild(node);
    }
  }
  else {
    drops.innerHTML = "";
  }
}

const Dropdown = ({ name, activities }) => {
  statuses.push([name, true]);
  return (
    <div className="dropdown-container" onClick={() => DropdownClick(activities, name)}>
      <div className="dropdown-input">
        <div class='topbar'>
            <div className="dropdown-selected-value">{name}</div>
            <div className="dropdown-tool">
                  <Icon />
            </div>
        </div>
        <div id={"dropElements"+name}></div>
      </div>
    </div>
  );
};

export default Dropdown;