import Nav from './components/nav/Nav'
import { ChakraProvider } from '@chakra-ui/react'
 import Home from './components/Home/Home'
 import Footer from './components/Footer'
 import About from './components/About'
 import Partners from './components/Partners/Partners'
function App() {
  return (
    <div >
      
      <ChakraProvider><Nav/></ChakraProvider>
      <Home/>
      <ChakraProvider><About/></ChakraProvider>
      <ChakraProvider><Partners/></ChakraProvider>
      <ChakraProvider><Footer/></ChakraProvider>

      
    </div>
  );
}

export default App;
