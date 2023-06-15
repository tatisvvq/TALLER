importar  {  defineConfig  }  desde  'vite'
importar  reaccionar  desde  '@vitejs/plugin-react'

// https://vitejs.dev/config/
exportar  defineConfig por defecto  ( {
  complementos : [ reaccionar ( ) ] ,
} )
import React from 'react';


function CartPage () {
    return (
        <div className='titleComponent'>
            <h1>CartPage</h1>
        </div>
    )
}

export default CartPage;
mport React from 'react';

function Home () {
    return (
        <div>
            <h1 className='titleComponent'>Bienvenido a nuestra tienda en Línea</h1>

            <div id="carouselExampleCaptions" className="carousel slide img-carrousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://img.freepik.com/vector-gratis/banners-rebajas-moda-foto_52683-15071.jpg" className="d-block w-100 " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://img.freepik.com/vector-gratis/coleccion-banners-abstractos-foto_23-2148144926.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.pinimg.com/originals/17/0e/5b/170e5b423db6b23472de06027bd39f26.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}

export default Home;
pie de página
© 2023 GitHub, Inc.
Pie de página de navegación
términos
Privacidad
Seguridad
import React from 'react';

function ProductDetails () {
    return (
        <div>
            <h1>ProductDetails</h1>
        </div>
    )
}

export default ProductDetails;
/* eslint-disable no-unused-vars */
import { useRoutes, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './App.css'
import Home from './pages/Home'
import MyAccount from './pages/MyAccount'
import CartPage from './pages/CartPage'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/myaccount', element: <MyAccount /> },
    { path: '/cart', element: <CartPage /> },
    { path: '/products', element: <Products /> },
    { path: '/*', element: <NotFound />}
  ])
  return routes
}


function App() {

  return (
    <BrowserRouter>
      <div className='principalContainer'>
        <NavBar />
        <div className='containerViews'>
          <AppRoutes />
        </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App

/* eslint-disable no-unused-vars */
import React from 'react';


const Card = (data) => {
  console.log(data)
    return (
        <div className="card">
        <div className="card-img">
          <img src={data.data.image} alt="" className='dataImg' />
        </div>
        <div className="card-info">
          <p className="text-title">{data.data.title}</p>
        </div>
        <div className="card-footer">
        <span className="text-title">${data.data.price}</span>
        <div className="card-button">
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
          </svg>
        </div>
      </div></div>
    );

}

export default Card;