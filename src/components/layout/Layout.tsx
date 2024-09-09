import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import PageNotFound from '../../pages/PageNotFound'
import CartPage from '../../pages/CartPage'
import Register from '../../pages/Register'
import ProductListPage from '../../pages/ProductListPage'
import ProductPage from '../../pages/ProductPage'

const Layout = () => {
  
  return (
    <>
        <Header/>
        <Main>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/products' element={<ProductListPage/>} />
            <Route path='/product/:id' element={<ProductPage/>} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </Main>
        <Footer/>
    </>
  )
}

export default Layout