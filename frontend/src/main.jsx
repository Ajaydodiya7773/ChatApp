
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authprovider } from './contex/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <Authprovider>
    <App />
  </Authprovider>,
)
