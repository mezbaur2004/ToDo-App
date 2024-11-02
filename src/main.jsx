import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from './redux/store/store.js';
import './assets/css/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </StrictMode>,
)
