import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import MainPage from './components/MainPage/MainPage'
import Calendar from './components/Calendar/Calendar'
import StoreClass from './components/StoreClass/StoreClass'
import StoreFunc from './components/StoreFunc/StoreFunc'


function App() {
  const now = new Date()
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div className="App">
            <Navbar />
            <MainPage />
            <StoreClass item={ item }/>
            <StoreFunc item={ item }/>
            <Calendar now={ now }/>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
