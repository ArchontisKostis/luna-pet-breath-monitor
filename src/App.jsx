import { useState } from 'react'
import './App.css'
import NavbarComponent from "./components/Navbar/NavbarComponent.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage.jsx";
import NewCountPage from "./pages/NewCountPage/NewCountPage.jsx";
import HistoryPage from "./pages/HistoryPage/HistoryPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavbarComponent />

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewCountPage />} />
          <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  )
}

export default App
