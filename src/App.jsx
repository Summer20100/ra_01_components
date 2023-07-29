import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
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
