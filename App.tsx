import React, { FC } from 'react';

interface AppProps {
  message: string;
}

const App: FC<AppProps> = ({ message }) => {
  return (
    <div>
      <h1>Olá, Mundo!</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
