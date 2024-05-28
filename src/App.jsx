import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './components/Sidebar';
import Chatarea from './components/Chatarea';


function App() {
  return (
    <>
    <div className="app-container">
      <div className="main-container">
      <Sidebar></Sidebar>
      <Chatarea></Chatarea>
      </div>
     
    </div>
    </>
  );
}

export default App;
