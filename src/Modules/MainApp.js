import React from 'react'
import HeaderApp from './Components/Header/HeaderApp'
import Footer from './Layouts/Footer'
import Video from './Components/Main/Video/Video'
import Explanation from './Components/Main/Explanation/Explanation'
import Features from './Components/Main/Features/Features'
import MainSentence from './Components/Main/MainSentence/MainSentence'

export default function MainApp() {
  return (
	<div className="App">
      {/* <header className="App-header">
        <HeaderApp/>
      </header> */}
      <main>
        <MainSentence/>
        <Video/>
        <Explanation/>
        <Features/>
      </main>
      
    </div>
  )
}






