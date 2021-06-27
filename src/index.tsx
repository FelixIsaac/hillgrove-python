import * as React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { ColorModeScript } from "@chakra-ui/react"
import { App } from "./App"
import "./assets/index.css"

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
)

serviceWorker.unregister()
reportWebVitals()
