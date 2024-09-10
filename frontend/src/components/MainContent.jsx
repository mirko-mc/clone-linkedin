import './MainContent.css';
import MySideBar from './MySideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainContent() {
    return ( 
        <Container>
            <Row>
                <Col md={9} className="main-content">
                    <div>MainContent</div>
                </Col>
                <Col md={3} className="sidebar">
                    <MySideBar />
                </Col>
            </Row>
        </Container>
    );
}

export default MainContent;
