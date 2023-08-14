import { useState } from 'react';

import HomePage from './pages/HomePage/HomePage';
import PublicPage from './pages/PublicPage/PublicPage';
import PrivatePage from './pages/PrivatePage/PrivatePage';

import PencilBar from "./component/PencilBar/PencilBar"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"

import './App.css'

function App() {
  const [state, setState] = useState(0)

  return <>
    <Header />
    <PencilBar>Sobre</PencilBar>

    {
      (state) ? (state == 1) 
        ? <PublicPage /> : 
        <PrivatePage /> : 
        <HomePage handleState={setState} />
    }

    <Footer />
  </>
}

export default App
