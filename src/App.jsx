import {useEffect, useLayoutEffect, useState} from 'react'
import './App.css'
import NavbarComponent from "./components/Navbar/NavbarComponent.jsx";
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage.jsx";
import NewCountPage from "./pages/NewCountPage/NewCountPage.jsx";
import HistoryPage from "./pages/HistoryPage/HistoryPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoadingPage from "./pages/LoadingPage/LoadingPage.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading for a few seconds
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the duration as needed 3000
    }, []);

    const Wrapper = ({children}) => {
        const location = useLocation();
        useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
    }

  return (
    <Router>
        {isLoading ? (
            <LoadingPage />
        ) : (
            <>
                <NavbarComponent />
                <Wrapper>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/new" element={<NewCountPage />} />
                        <Route path="/history" element={<HistoryPage />} />
                    </Routes>
                </Wrapper>
                <Footer />
            </>
        )}
    </Router>
  )
}

export default App
