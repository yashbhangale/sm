import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

// Styles
import { theme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';

// Components
import Layout from './components/layout/Layout';
import Loading from './components/ui/Loading';

// Pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatePresence>
        {loading ? (
          <Loading fullScreen />
        ) : (
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Add more routes as needed */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Layout>
          </Router>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
