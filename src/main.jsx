import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Root from './Layout/Root/Root.jsx'
import AboutUs from './Layout/Pages/AboutUs/AboutUs.jsx'
import Return from './Layout/Pages/Return/Return.jsx'
import Home from './Layout/Pages/Home/Home.jsx'
import CategoryPage from './Layout/Pages/Home/Categories/CategoryPage/CategoryPage.jsx'
import Login from './Layout/Pages/Login/Login.jsx'
import Register from './Layout/Pages/Register/Register.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import PrivateRoute from './Routes/PrivateRoute.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'

// TanStack Query
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import Dashboard from './Layout/Dashboard.jsx'
import Cart from './Layout/Pages/Dashboard/Cart/Cart.jsx'
import Users from './Layout/Pages/Dashboard/Users/Users.jsx'
import AddProduct from './Layout/Pages/Dashboard/AddProduct/AddProduct.jsx'
import AdminRoute from './Routes/AdminRoute.jsx'
import ManageProducts from './Layout/Pages/Dashboard/ManageProducts/ManageProducts.jsx'
import UpdateProduct from './Layout/Pages/Dashboard/UpdateProduct/UpdateProduct.jsx'
import Profile from './Layout/Pages/Dashboard/Profile/Profile.jsx'
import AllOrders from './Layout/Pages/Dashboard/AllOrders/AllOrders.jsx'
import Checkout from './Layout/Pages/Dashboard/Checkout/Checkout.jsx'
import Orders from './Layout/Pages/Dashboard/Orders/Orders.jsx'
import Customers from './Layout/Pages/Customers/Customers.jsx'
import NotFound from './Layout/Pages/NotFound/NotFound.jsx'
import FAQ from './Layout/Pages/FAQ/FAQ.jsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/*',
        element: <NotFound></NotFound>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/return',
        element: <Return></Return>
      },
      {
        path: '/customers',
        element: <Customers></Customers>
      },
      {
        path: '/details/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`)
      },
      {
        path: '/category/:categoryName',
        element: <CategoryPage></CategoryPage>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // User Routes
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'orders',
        element: <Orders></Orders>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      },
      // Admin Routes
      {
        path: 'users',
        element: <AdminRoute><Users></Users></AdminRoute>
      },
      {
        path: 'addProduct',
        element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
      },
      {
        path: 'manageProducts',
        element: <AdminRoute><ManageProducts></ManageProducts></AdminRoute>
      },
      {
        path: 'updateProduct/:id',
        element: <AdminRoute><UpdateProduct></UpdateProduct></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`)
      },
      {
        path: 'allOrders',
        element: <AdminRoute><AllOrders></AllOrders></AdminRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
