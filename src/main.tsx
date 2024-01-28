import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  Root,
  HomePage,
  ErrorPage,
  ComparisonPage,
  ResultsPage,
} from './pages';


import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    index: false,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
        index: true
      },
      {
        path: "/contest",
        element: <ComparisonPage />
      },
      {
        path: "/results",
        element: <ResultsPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
