import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    fetch('http://localhost:3000/connection')
        .then(res => res.text())
        .then(msg => setMessage(msg))
        .catch(err => console.error('Fetch error:', err));
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me for a confirmation of connection
      </button>
      <p>{message}</p>
    </div>
  )
}

export default App
