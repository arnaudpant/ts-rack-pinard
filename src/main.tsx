import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Flip, ToastContainer} from 'react-toastify';
import './index.scss'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer 
      position="top-center"
      transition={Flip}
    />
    <App />
  </React.StrictMode>,
)
