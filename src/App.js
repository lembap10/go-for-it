import './App.css';
import MainScreen from './Screens/MainScreen';
import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTripScreen from './Screens/CreateTripScreen';
import SavedTripScreen from './Screens/SavedTripScreen';
import BeginTripScreen from './Screens/BeginTripScreen';
import TravelersScreen from './Screens/TravelersScreen';
import BudgetScreen from './Screens/BudgetScreen';
import ViewTripScreen from './Screens/ViewTripScreen';
import InviteScreen from './Screens/InviteScreen';
import CostSharingScreen from './Screens/CostSharing';
import DateScreen from './Screens/DateScreen';
import ActivitiesScreen from './Screens/ActivitiesScreen';
import VibesScreen from './Screens/VibesScreen';
import EditScreen from './Screens/EditScreen';

function App() {
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Routes>
          <Route path='/' element={<MainScreen />} exact />
          <Route path='/createtrip' element={<CreateTripScreen />} />
          <Route path='/savedtrips' element={<SavedTripScreen />} />
          <Route path='/createtrip/begintrip' element={<BeginTripScreen />} />
          <Route path='/createtrip/date' element={<DateScreen />} />
          <Route path='/createtrip/travelers' element={<TravelersScreen />} />
          <Route path='/createtrip/budget' element={<BudgetScreen />} />
          <Route path='/createtrip/activities' element={<ActivitiesScreen />} />
          <Route path='/createtrip/vibes' element={<VibesScreen />} />
          <Route path={'/viewtrip'} element={<ViewTripScreen />} />
          <Route path={'/createtrip/invite'} element={<InviteScreen />} />
          <Route
            path={'/createtrip/costsharing'}
            element={<CostSharingScreen />}
          />
          <Route path={'/createtrip/edit'} element={<EditScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
