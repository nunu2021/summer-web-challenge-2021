import logo from './style/img/logo.svg';
import './App.css';
import MentorPage from './components/mentorpage.js'
import img from "./style/img/background.jpg"


function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${img})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',}}>


<nav className="navbar navbar-expand-lg" style={{backgroundColor:'#000044'}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <img src={logo} style={{margin:'20px'}}></img>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

      
      <div>

        <MentorPage></MentorPage>

      </div>
    </div>
  );
}

export default App;
