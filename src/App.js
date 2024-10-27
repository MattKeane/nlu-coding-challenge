import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// component imports
import HeaderNav from './components/HeaderNav';
import Slider from './components/Slider';
import Feed from './components/Feed';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Slider />
      <Row>
        <Col xs={ 12 } md={ 8 }>
          <Feed />
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