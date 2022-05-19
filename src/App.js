import logo from './logo.svg';
import './App.css';
import Logo from "./Components/Logo"
import Links from "./Components/Links"
import Button from "./Components/Button"

var box={
  
  height: "50px",
  width:"80%",
  margin:"auto",
  marginTop:"20px",
  display:"flex",
  backgroundColor:"black",
  textAlign:"center",
  

  
}


function App() {
  return (
     <div className="App">
      <div style={box}>
        <Logo/>
        <Links/>
        <Button/>
      </div>
     </div>
  );
}

export default App;
