import { AuthUserProvider } from './context/AuthUserContext.tsx';
import { Flip, ToastContainer } from 'react-toastify';
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthUserProvider>
      <ToastContainer
        position="top-center"
        transition={Flip}
      />
      <App />
    </AuthUserProvider>
)
