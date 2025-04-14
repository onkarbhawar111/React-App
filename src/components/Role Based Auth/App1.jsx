import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import UnAuthorized from './UnAuthorized'
import AdminPage from './AdminPage'
import ProtectedRoute from './context/ProtectedRoute'
import ContextProvider from './context/ContextProvider'
import UserPage from '../Role Based Auth/UserPage.jsx'
import GuestPage from '../Role Based Auth/GuestPage.jsx'
import HomePage from './HomePage.jsx'

const App1 = () => {
    return (
        <ContextProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/unauthorized' element={<UnAuthorized />} />

                    {/* protected routes */}
                    <Route path='/admin' element={
                        <ProtectedRoute roles={['admin']}>
                            <AdminPage />
                        </ProtectedRoute>
                    }>
                    </Route>

                    <Route path='/user' element={
                        <ProtectedRoute roles={['admin', 'user']}>
                            <UserPage />
                        </ProtectedRoute>
                    }>
                    </Route>
                    <Route path='/guest' element={
                        <ProtectedRoute roles={['admin', 'user', 'guest']}>
                            <GuestPage />
                        </ProtectedRoute>
                    }>
                    </Route>
                </Routes>
            </Router>
        </ContextProvider>
    )
}

export default App1