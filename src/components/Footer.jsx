import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-black">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">🚀 Super NOVA is LIVE!</h1>
        <p>All features will appear here one by one. Stay tuned!</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
