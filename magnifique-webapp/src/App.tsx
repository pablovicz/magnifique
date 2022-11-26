import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./routes/Router"
import { SidebarDrawerProvider } from "./services/providers/SidebarDrawerProvider";
import { theme } from "./theme/theme"


function App() {

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS>
        <SidebarDrawerProvider>
          <Router />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
