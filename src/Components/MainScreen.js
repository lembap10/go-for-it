import React, {useState} from 'react';
import './MainScreen.css';

function MainScreen(){
    return (
        <div className='MainScreen'>
           <button className='MainButton' id="SavedTrips"> Saved Trips </button>
           <button className='MainButton' id="CreateTrip"> Create Trip </button>
        </div>
    )
}

export default MainScreen;