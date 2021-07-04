import React from 'react'
import { hydrate, render } from 'react-dom'
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { ColorModeScript } from "@chakra-ui/react"
import App from "./App"
import "./assets/index.css"

const app = (
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root')
if (rootElement && rootElement!.hasChildNodes()) {
  hydrate(app, rootElement)
  serviceWorker.register()
  reportWebVitals()
} else {
  render(app, rootElement)
}
