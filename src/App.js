import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Car_Details from './components/CarsDetails/CarDetails'
import Payment from './components/Payment/Payment'
import ScrollToTop from './components/OnTop/ScrollToTop';
import Booking from './pages/Booking';
import Thankyou from './components/thankyou/Thankyou';
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
          <Route path="/thankyou" element={<Thankyou/>} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
