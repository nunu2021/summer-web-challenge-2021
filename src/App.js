import logo from './style/img/logo.svg';
import './App.css';
import MentorPage from './components/mentorpage.js'
import img from "./style/img/background.jpg"
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${img})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{backgroundColor:'#002244'}}>
  <Container>
   <img
        src={logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        style={{marginRight:'20px'}}
      />
  <Navbar.Brand href="#home"> Mentors </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
   
  </Navbar.Collapse>
  </Container>
</Navbar>


      
      <div  style={{margin: '1%' }} >
        <MentorPage> </MentorPage>
      </div>


    </div>
  );
}

export default App;
