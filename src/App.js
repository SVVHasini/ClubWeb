import logo from './logo.svg';
import './App.css';
import { LoginNsignin } from './Components/login&signin/login&signin';
import {ApplicationForm} from './Components/applicationforms/application';
import { Navbar } from './Components/homepage/Header/navigation';


function App() {
  return (
    <div className="App">
      {/* <LoginNsignin/> */}
      <Navbar/>
      {/* <ApplicationForm/>  */}
    </div>
  );
}

export default App;