// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureGrid from './components/FeatureGrid'; // ✅ Feature grid import

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-900">
      <Header />

      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Super NOVA 🚀</h1>
        <p className="mb-6">
          This is the powerful frontend for JarvisAI — unleash your AI potential!
        </p>

        {/* ✅ Super NOVA Modes Grid */}
        <FeatureGrid />
      </main>

      <Footer />
    </div>
  );
};

export default App;
