import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSections from './sections/ShowcaseSections'
import NavBar from './components/HeroModels/NavBar'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import Contact from './sections/Contact'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSections />  
      <FeatureCards/>
      <ExperienceSection/>
        <Contact/>
      
     <div id="work" className='app-showcase'>
       
      </div>
    </>   
  )
}

export default App