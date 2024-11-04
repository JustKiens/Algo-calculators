import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FutureValueOrdinaryAnnuity from './pages/future/futureValueOrdinaryAnnuity';
import FutureValueAnnuityDue from './pages/future/futureValueAnnuityDue'; // This import can be used later if needed
import LandingPage from './pages/landingpage'; // Import the new LandingPage component
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/future-value-ordinary-annuity" className="text-white text-2xl font-bold">
            Future Value of Simple Annuity
          </Link>
          {/* Uncomment below if you need a link for Future Value Annuity Due */}
          {/* <Link to="/future-value-annuity-due" className="text-white text-2xl font-bold">
            Future Value of Annuity Due
          </Link> */}
        </div>
      </nav>

      {/* Routes */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Use the LandingPage component */}
          <Route path="/future-value-ordinary-annuity" element={<FutureValueOrdinaryAnnuity />} />
          {/* Uncomment below if you want to include FutureValueAnnuityDue */}
          {/* <Route path="/future-value-annuity-due" element={<FutureValueAnnuityDue />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
