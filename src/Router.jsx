import { Routes, Route } from 'react-router-dom'

import HaveAccountProvider from './contexts/HomePageContexts/HaveAccountContext'
import InputHandlersProvider from './contexts/HomePageContexts/InputsHandlersContext'
import RegisterLoginContextProvider from './contexts/ApiConnectionsContext/RegisterLoginContext'

import NotFoundPage from './pages/NotFoundPage'

import NotesPageValidationToken from './components/NotesPage/NotesPageValidationToken'
import HomePageValidationToken from './components/HomePage/HomePageValidationToken'

export default function Router() {
  return (
    <Routes>
      <Route
        path="/*"
        element={<NotFoundPage />}
      />
      <Route
        path="/"
        element={
          <InputHandlersProvider>
            <RegisterLoginContextProvider>
              <HaveAccountProvider>
                <HomePageValidationToken />
              </HaveAccountProvider>
            </RegisterLoginContextProvider>
          </InputHandlersProvider>
        }
      />
      <Route
        path="/notes"
        element={
          <InputHandlersProvider>
            <RegisterLoginContextProvider>
              <NotesPageValidationToken />
            </RegisterLoginContextProvider>
          </InputHandlersProvider>
        }
      />
    </Routes>
  )
}
