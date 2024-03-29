import React from 'react'
import {ChakraProvider} from "@chakra-ui/react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import {BrowserRouter} from 'react-router-dom'


const styles = {
  global:(props)=>({
    body:{
      bg:mode("black","#000")(props),
      color:mode("#000","whiteAlpha.900")(props)
    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}


const theme = extendTheme({ config,styles })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
