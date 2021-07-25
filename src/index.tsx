import React from 'react'
import { hydrate, render } from 'react-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
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
} else {
  render(app, rootElement)
}

serviceWorkerRegistration.register({
  onUpdate: registration => {
    console.log('service worker update available', registration);
    if (registration && registration.waiting) registration.waiting.postMessage({ type: 'SKIP_WAITING' });

    registration.addEventListener('statechange', e => {
      if (e.target.state === 'activated') window.location.reload();
    });
  },
  onSuccess: registration => {
    console.info('service worker on success state', registration);
  }
});

reportWebVitals()