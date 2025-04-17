import './App.css';

import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import About from './About'
import Contact from './Contact'

function Header(){
  return(
  <ul>
    
  <li> <Link to="/"> Home</Link></li><br/>

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
<Route path="/" element={<App/>}/>
<Route path="/home" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>
<Route path="/about" element={<About/>}/>

<Route path="/contact" element={<Contact/>}/>

</Routes>
<Header/>
      </BrowserRouter>
    </div>
  );
}

export default App;
