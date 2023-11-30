import {
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { ButtonComp } from './components/ButtonComp';
import { Card } from './components/Card';

function App() {
  return (
    <Card />
  );
}

export default App;
