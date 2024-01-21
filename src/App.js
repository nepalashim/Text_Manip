
import React,{ useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";

 
function App() {

  const [Mode, setMode] = useState('light');//whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() =>{
      setAlert(null);

    },1500);
    

  }
  const toggleMode =()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#0f092f'
      showAlert("Dark Mode has been enabled","success");
      document.title='LostNFound - Dark Mode';
    //   setInterval(()=>{
    //     document.title='Did you lost something? ';
        
    //   },2000);
    //   setInterval(()=>{
    //     document.title='LostNFound is amazing ';
        
    //   },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white'
      showAlert("Light Mode has been enabled","success");
      document.title='LostNFound - Light Mode';
    }
  }
  return (
    <>
    <Router> 
    
    <Navbar title= "LostNFound" mode={Mode} toggleMode={toggleMode}/>
      {/* <Navbar title="LostNFound"/>  */}

      <Alert alert={alert}/>


        <div className="container" my-3="true">
          <Routes>
          <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below." mode={Mode} />}/>
            
                        
            
          </Routes>
         
        
        </div>
      
      </Router>

    
    
      



 
    </>
    
  );
}

export default App;
