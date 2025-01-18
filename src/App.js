import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Booking from './components/Booking/Booking'
import Header from './components/Header';
import Footer from './components/Footer';
import Car_Details from './components/CarsDetails/CarDetails'
import Payment from './components/Payment/Payment'
import ScrollToTop from './components/OnTop/ScrollToTop';
function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop /> {/* Ensure this is inside the Router */}
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/car_detail" element={<Car_Details/>} />
          <Route path="/payment" element={<Payment/>} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
