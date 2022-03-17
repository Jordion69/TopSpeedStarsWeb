import React from 'react'
import HeaderApp from './Components/Header/HeaderApp'
import Footer from './Components/Footer/Footer'
import Video from './Components/Main/Video/Video'
import Explanation from './Components/Main/Explanation/Explanation'
import Features from './Components/Main/Features/Features'
export default function MainApp() {
  return (
	<div className="App">
      <header className="App-header">

        <HeaderApp/>
      </header>
      <main>
        <Video/> 
        <Explanation/>
        <Features/>
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}






