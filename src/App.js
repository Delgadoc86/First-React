import React from 'react';
import './App.css';  // Los estilos globales si los tienes
import LandingPage from './components/LandingPage';  // Importamos la Landing Page

function App() {
  return (
    <div className="App">
      <LandingPage />  {/* Renderizamos la Landing Page */}
    </div>
  );
}

export default App;
