'use client'
import { AppRouter } from "./Router/AppRouter";
import { Footer } from "./componentes/Footer";
import { Header } from "./componentes/Header";
import { BrowserRouter } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

