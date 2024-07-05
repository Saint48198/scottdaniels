import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    axios.get('/api')
        .then(response => {
          setMessage(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1>{message}</h1>
        </header>
      </div>
  );
}

export default App;
