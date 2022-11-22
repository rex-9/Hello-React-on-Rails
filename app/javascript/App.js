import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/greeting">Go to Greetings Page</Link>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </>
  );
};

export default App;