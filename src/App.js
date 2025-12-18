import { Routes, Route } from 'react-router-dom';
import './App.css';
import MockScamTrainer from './MockScamTrainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MockScamTrainer />} />
        <Route path="/mock-scam" element={<MockScamTrainer />} />
        <Route path="/InvestmentScam" element={<MockScamTrainer />} />
      </Routes>
    </div>
  );
}

export default App;
