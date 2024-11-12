import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskPage from './pages/TaskPage'
import LoginPage from './pages/LoginPage'
import { ChakraProvider } from '@chakra-ui/react'
import UpdateProfile from './pages/UpdateProfile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/update-profile",
    element: <UpdateProfile />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
      <App />
    </ChakraProvider>
  </StrictMode>,
)
