import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Contato from './routes/Contato/Contato.jsx'
import Sobre from './routes/Sobre/Sobre.jsx'
import Error from './routes/Error/Error.jsx'
import Psl from './routes/Psl/Psl.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Psl/> },
      { path: "contato", element: <Contato /> },
      { path: "sobre", element: <Sobre /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)