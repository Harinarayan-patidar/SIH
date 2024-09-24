import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FacultyDetails from './components/FacultyDetails';
import Navbar from './components/Navbar';
import Faculties_details from './components/faculties_details'; // Correct component name

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar /> {/* Include Navbar for navigation */}
        <Routes>
          <Route path="/" element={<FacultyDetails />} /> {/* Home route */}
          <Route path="/faculties_details" element={<Faculties_details />} /> {/* Faculty details route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
