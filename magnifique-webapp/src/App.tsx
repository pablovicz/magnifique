import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./routes/Router"
import { theme } from "./theme/theme"


function App() {

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS>
        <Router />
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
