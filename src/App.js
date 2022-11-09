import './App.css';
import MainScreen from './Screens/MainScreen';
import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTripScreen from './Screens/CreateTripScreen';
import SavedTripScreen from './Screens/SavedTripScreen';
import BeginTripScreen from './Screens/BeginTripScreen';


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
          <Routes>
            <Route path="/" element={<MainScreen />} exact />
            <Route path="/createtrip" element={<CreateTripScreen />} />
            <Route path="/savedtrips" element={<SavedTripScreen />} />
            <Route path="/createtrip/begintrip" element={<BeginTripScreen />} />
          </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
