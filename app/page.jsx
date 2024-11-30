import { useState } from 'react';


const Home = () => {
  const [message, setMessage] = useState('Hello World');

  const toggleMessage = () => {
    setMessage(prevMessage => (prevMessage === 'Hello World' ? 'Goodbye World' : 'Hello World'));
  };

  return (
    <div>.
      <h1>{message}</h1>
      <button onClick={toggleMessage}>Hello world</button>
    </div>
  );
};

export default Home;
