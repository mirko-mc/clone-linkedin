import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/pages/NotFound';
import MyFooter from './components/MyFooter';
import MyHeader from './components/MyHeader';
import MySideBar from './components/MySideBar';
import { UserContextProvider } from './components/contexts/UserContextProvider';
import HomePage from './components/pages/HomePage';


import MyNav from './components/MyNav';
import { Col, Container, Row } from 'react-bootstrap';

function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
      <div className='mainContainer'>
        <MyHeader>
        <MyNav />
        </MyHeader>
          <Container>
            <Row>
              <Col sm={12} md={9}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/profile/:id" element={<HomePage />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </Col>
              <Col sm={12} md={3}><MySideBar /></Col>
            </Row>
          </Container>
          <MyFooter />
      </div>
      </BrowserRouter>
    </UserContextProvider>
    
  );
}

export default App;
