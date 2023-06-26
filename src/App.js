import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Hero from './components/hero/Hero';
import Events from './components/events/Events';
import Statistics from './components/Statistics/Statistics';
import TomorrowlandVideo from './components/Trailer/Trailer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Events/>
      <Statistics/>
      <TomorrowlandVideo/>
    </>
  );
}

export default App;