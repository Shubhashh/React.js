import './App.css';
import ClickEvent from './ClickEvent';
import Home from './Home'
import Login from './Login'
import About from './About'
import Contact from './Contact'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';



function Header(){
  return(
  <ul>
    <li><Link to="/"> Default </Link></li><br/>
  <li> <Link to="/home"> Home</Link></li><br/>

  <li> <Link to="/login">Login in </Link></li><br/>

  <li> <Link to="/about"> About </Link></li><br/>


  <li> <Link to="/contact"> Contact Us</Link></li><br/>
  </ul>
  
  )
}

function App() {
  return (
    <div className="App">
      
      

<BrowserRouter>

<Routes>
<Route path="/" element={<ClickEvent/>}/>
 <Route path="/home" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/login" element={<Login/>} />
<Route path="/contact" element={<Contact/>} />

</Routes>
<Header/>
</BrowserRouter>


    </div>
  );
}

export default App;
