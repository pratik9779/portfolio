import './App.css';
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div id="main">
        <Home />
      </div>
    </div>
  );
}

export default App;
