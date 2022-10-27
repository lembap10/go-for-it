import './App.css';
import MainScreen from './Screens/MainScreen';
import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTripScreen from './Screens/CreateTripScreen';
import SavedTripScreen from './Screens/SavedTripScreen';


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<MainScreen />} exact />
            <Route path="/createtrip" element={<CreateTripScreen />} />
            <Route path="/savedtrips" element={<SavedTripScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
