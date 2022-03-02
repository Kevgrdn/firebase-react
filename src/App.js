import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Inscription from './components/Inscription'

function App() {
  return (
    <>
      <Inscription />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
