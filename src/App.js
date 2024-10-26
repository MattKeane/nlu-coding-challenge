import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

// component imports
import HeaderNav from './components/HeaderNav';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Slider />
    </div>
  );
}

export default App;