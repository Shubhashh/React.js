import logo from './logo.svg';
import './App.css';
import FirstComp from './FirstComp';
import SecondCopm from './SecondCopm';
import ThirdCopm from './ThirdCopm';
import FourthComp from './FourthComp';





const user={
  name:"Shiva",
  city:"Hyderabad",
  area:"Ameerpet"
}

let a="Ravi"

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
     <FirstComp name={user.name}/>
     <SecondCopm name={a}/>
     <ThirdCopm name="Suresh"/>
     <FourthComp name="Mukesh"/>
  
  
    </div>
  );
}

export default App;
