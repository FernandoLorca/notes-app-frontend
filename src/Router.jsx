import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HaveAccountProvider from './contexts/HomePageContexts/HaveAccountContext'
import InputHandlersProvider from './contexts/HomePageContexts/InputsHandlersContext'
import RegisterLoginContextProvider from './contexts/ApiConnectionsContext/RegisterLoginContext'

export default function Router() {
  return (
    <Routes>
      <Route
        path="/*"
        element={<h1>404</h1>}
      />
      <Route
        path="/"
        element={
          <InputHandlersProvider>
            <RegisterLoginContextProvider>
              <HaveAccountProvider>
                <HomePage />
              </HaveAccountProvider>
            </RegisterLoginContextProvider>
          </InputHandlersProvider>
        }
      />
    </Routes>
  )
}
