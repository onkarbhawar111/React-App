import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App1 from './components/Role Based Auth/App1.jsx'
import App2 from './App2.jsx'
import App3 from './components/App3.jsx'
import { store } from './components/redux/store.jsx'
import { Provider } from 'react-redux'
import Appfinal from './Appfinal.jsx'
import Pagination from './components/Pagination/Pagination.jsx'
import TailWindCSS from './components/TailWindCSS.jsx'
import NavBar from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import TypesExample from './components/Button.jsx'

createRoot(document.getElementById('root')).render(
    // <Provider store={store}>
    //     <Appfinal />
    // </Provider>,
    // <Pagination />
    // <TailWindCSS />
    // <NavBar />
    <TypesExample />
)
