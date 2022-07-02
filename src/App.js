import About from './components/About';
import Info from './components/Info';
import Interests from './components/Interests';
import SocialNetworks from './components/SocialNetworks';

function App() {
  return (
    <div className='container'>
      <div className='card'>
        <Info />
        <div className='description'>
          <About />
          <Interests />
        </div>
        <SocialNetworks />
      </div>
    </div>

  )
}

export default App;
