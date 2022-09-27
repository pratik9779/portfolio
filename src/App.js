import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Left from './Components/Left'
import Right from './Components/Right'
import Main from './Components/Main/Main'

function App() {
  return (
    <div className="App">
      <div className="app-navbar" ><Navbar /></div>
      <div className="app-left" ><Left /></div>
      <div className="app-main" ><Main /></div>
      <div className="app-right" ><Right /></div>
    </div>
  );
}

export default App;
