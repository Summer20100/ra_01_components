import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import MainPage from './components/MainPage/MainPage'
import Calendar from './components/Calendar/Calendar'
import StoreClass from './components/StoreClass/StoreClass'
import StoreFunc from './components/StoreFunc/StoreFunc'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div className="App">
            <Navbar />
            <MainPage />
            <StoreClass />
            <StoreFunc />
            <Calendar />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
