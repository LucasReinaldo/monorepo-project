import React, { useEffect } from 'react';
import api from '@monorepo/axios-config';

// import { Container } from './styles';

const App = () => {
  useEffect(() => {
    api.get('/').then((response) => {
      console.log(response);
    });
  }, []);

  return <h1>Hello World!</h1>;
};

export default App;
