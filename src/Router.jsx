import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HaveAccountProvider from './contexts/HomePageContexts/HaveAccountContext'
import InputHandlersProvider from './contexts/HomePageContexts/InputsHandlersContext'

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
          <HaveAccountProvider>
            <InputHandlersProvider>
              <HomePage />
            </InputHandlersProvider>
          </HaveAccountProvider>
        }
      />
    </Routes>
  )
}
