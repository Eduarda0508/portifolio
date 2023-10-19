import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './componentes/Header/Header'
import Portfolio from './componentes/Portfolio/Portfolio'
import Main from './componentes/Main/Main'
import Contato from './componentes/contato/Contato'
import Footer from './componentes/Footer/Footer'

import{createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Header/>
    <Portfolio/>
    <Main/> 
    <Footer/>
    </>
  },
  {
    path: "/noticias",
    element:<div>Página de Notícias!</div>,
  },
  {
    path: "/sobre",
    element:<div>Página Sobre!</div>,
  },
  {
    path: "/contato",
    element:<div><Contato/><Footer/></div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

