import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// style sheets
import './App.scss';

// component imports
import HeaderNav from './components/HeaderNav';
import Slider from './components/Slider';
import Feed from './components/Feed';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

import logo from './assets/images/logo.png';

function App() {
  return (
    <div className="App">
      <header>
        <Image src={ logo } className="header-logo" />
        <HeaderNav />
      </header>
      <Slider />
      <Row>
        <Col xs={ 12 } md={ 8 }>
          <Feed posts={ 2 } />
        </Col>
        <Col>
          <QuoteForm />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;