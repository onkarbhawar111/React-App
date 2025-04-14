import React from 'react'
// import './App.css'
import FormHandling from './components/FormHandling'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/routing/About'
import Home from './components/routing/Home'
import ContactUs from './components/routing/ContactUs'
import User from './components/routing/User'
import NavBar from './components/routing/NavBar'
import Login from './components/routing/Login'
import NotFound from './components/routing/NotFound'
import ContactA from './components/routing/contactA'
import ContactB from './components/routing/ContactB'
import ContactC from './components/routing/ContactC'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><NavBar /><Home /></>
    },
    {
      path: '/about',
      element: <><NavBar /><About /></>
    },
    {
      path: '/contact-us',
      element: <><NavBar /><ContactUs /></>,
      children: [
        {
          path: 'contactA',
          element: <><ContactA /></>
        },
        {
          path: 'contactB',
          element: <><ContactB /></>
        },
        {
          path: 'contactC',
          element: <><ContactC /></>
        },
      ]
    },
    {
      path: '/user',
      element: <><NavBar /><User /></>
    },
    {
      path: '/login/:username',
      element: <><NavBar /><Login /></>
    },
    {
      path: '*',
      element: <><NotFound /></>
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App


// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import NavBar from './components/routing/NavBar'
// import Home from './components/routing/Home'
// import About from './components/routing/About'
// import ContactUs from './components/routing/ContactUs'
// import User from './components/routing/User'

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path='/' element={<><NavBar /><Home /></>} />
//           <Route path='/about' element={<><NavBar /><About /></>} />
//           <Route path='/contact-us' element={<><NavBar /><ContactUs /></>} />
//           <Route path='/user' element={<><NavBar /><User /></>} />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App