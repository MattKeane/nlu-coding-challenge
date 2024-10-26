import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

// component imports
import HeaderNav from './components/HeaderNav';
import Slider from './components/Slider';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Slider />
      <Feed />
    </div>
  );
}

export default App;