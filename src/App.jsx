import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FutureValueOrdinaryAnnuity from './pages/future/futureValueOrdinaryAnnuity';
import FutureValueAnnuityDue from './pages/future/futureValueAnnuityDue';
import LandingPage from './pages/LandingPage'; // Import the new LandingPage component
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">
          </Link>
          <div>
            <Link to="/future-value-ordinary-annuity" className="text-gray-300 hover:text-white px-4">
              Future Value Ordinary Annuity
            </Link>
            <Link to="/future-value-annuity-due" className="text-gray-300 hover:text-white px-4">
              Future Value Annuity Due
            </Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Use the LandingPage component */}
          <Route path="/future-value-ordinary-annuity" element={<FutureValueOrdinaryAnnuity />} />
          <Route path="/future-value-annuity-due" element={<FutureValueAnnuityDue />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
