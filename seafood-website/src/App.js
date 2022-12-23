import logo from './logo.svg';
import './Style/Style.scss'
import './App.css';
import Header from './Components/DemoHeader';
import Demo from './Components/Demo';
import NewReactHedaer from './Components/NewReactHedaer';
import Tabbing from './Components/Tabbing';
import Tab3 from './Components/Tab3';
import Box from './pages/Box';
import Pricing from './pages/Pricing';
import Slider from './pages/Slider';
import Footer from './pages/Footer';

function App() {
  return (
    <>
    <div className='bgGrad'>

    <NewReactHedaer/>
    </div>
    <Tabbing/>
    <Box/>
    <Pricing/>
    <Slider/>
    <Demo/>
    <Footer/>
    {/* <Header/> */}
    </>
  );
}

export default App;
