import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import styled from 'styled-components'
import 'react-notifications-component/dist/theme.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import 'react-toastify/dist/ReactToastify.css'
import Slider from "./components/Slider.js"

import Banner from "./components/Banner.js"

import HomeScreen from './screens/HomeScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import Cart from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import { ToastContainer } from 'react-toastify'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import Navigation from './components/Navigation'
import Navigation1 from './components/navigation1'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import data from "./data/data.json"
import Footer from './components/Footer'

const Grid = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-areas: 'header' 'main' ;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`

const Main = styled.main`
  grid-area: main;
`

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ReactNotification />
      <Grid>
        <Navigation1 />
        <Navigation />

        <Slider start={data.banner.start} />
       
        <Main>
          <Route path='/products/:id' component={ProductDetailsScreen} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/orders/:id' component={OrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route exact path='/' component={HomeScreen} />
        </Main>
      </Grid>
      
      <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />
      <ToastContainer autoClose={2500} />
    </>
  )
}

export default App
