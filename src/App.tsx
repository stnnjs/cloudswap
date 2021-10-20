import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { PageContent } from './components/PageContent';

function App() {
  return (
    <div className="App">
      <Header />
      <PageContent />
    </div>
  );
}

export default App;
