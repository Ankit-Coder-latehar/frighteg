
import './App.css';
import ReviewsSection from './components/ReviewSection';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import DemoForm from './components/DemoForm';
import LogoCarousel from './components/logoslider';
import HeadingSection from './components/HeadingSection';
import BiddingStrategies from './components/Bidding';
import Bidding2Strategies from './components/Bidding2';
import Bidding3Strategies from './components/Bidding3';
import Bidding4Strategies from './components/Bidding4';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <DemoForm/>
      <LogoCarousel/>
      <HeadingSection/>
      <BiddingStrategies/>
      <Bidding2Strategies/>
      <Bidding3Strategies/>
      <Bidding4Strategies/>
     <ReviewsSection/>
     <Footer/>
    </div>
  );
}

export default App;
