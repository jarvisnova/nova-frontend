// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FeatureGrid from './components/FeatureGrid';

import TrendingMode from './components/pages/mode/TrendingMode';
import ExplainMode from './components/pages/mode/ExplainMode';
import KnowledgeMode from './components/pages/mode/KnowledgeMode';
import AutoCoachMode from './components/pages/mode/AutoCoachMode'; // ✅ NEW

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-900">
        <Header />

        <main className="flex-grow p-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-3xl font-bold mb-4">Welcome to Super NOVA 🚀</h1>
                  <p className="mb-6">
                    This is the powerful frontend for JarvisAI — unleash your AI potential!
                  </p>
                  <FeatureGrid />
                </>
              }
            />

            {/* ✅ Super NOVA Mode Routes */}
            <Route path="/mode/trending" element={<TrendingMode />} />
            <Route path="/mode/explain" element={<ExplainMode />} />
            <Route path="/mode/knowledge" element={<KnowledgeMode />} />
            <Route path="/mode/auto-coach" element={<AutoCoachMode />} /> {/* ✅ NEW */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
