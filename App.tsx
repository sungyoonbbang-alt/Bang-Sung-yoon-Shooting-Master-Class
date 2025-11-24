import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clinic from './pages/Clinic';
import Forum from './pages/Forum';
import MyLog from './pages/MyLog';
import Coach from './pages/Coach';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clinic" element={<Clinic />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/mylog" element={<MyLog />} />
            <Route path="/coach" element={<Coach />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;