import React from 'react'
import './app.css'
import {useRef,useState } from 'react'
import NavBar from './componants/NavBar/NavBar'
import Hero from './componants/Hero/Hero'
 import Sites from './componants/Sites/Sites'
import WhatGpt from './componants/WhatGpt3/WhatGpt'
import RegisterToday from './componants/RegisterToday/RegisterToday'
import CaseStudies from './componants/CaseStudies/CaseStudies'
import OpenAI from './componants/OpenAI/OpenAI'
import Library from './componants/Library/Library'
import Footer from './componants/Footer/Footer'
import Loginpage from './componants/Loginpage/Loginpage'


function App() {


     const [isLoggedIn, setIsLoggedIn] = useState(false);


  const homeRef = useRef(null)
  const whatisgptRef = useRef(null)
  const openaiRef = useRef(null)
  const casestudiesRef = useRef(null)
  const libraryRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

   if (!isLoggedIn) {
     return <Loginpage onLoginSuccess={() => setIsLoggedIn(true)} />;
   }

  
  return (
    

<div>
   
      <NavBar
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          whatisgptRef,
          openaiRef,
          casestudiesRef,
          libraryRef,
        }}
      />

    
      <div className='container'>

      
      <div ref={homeRef}><Hero /></div>
      <Sites />
      <div ref={whatisgptRef}><WhatGpt /></div>
      <div ref={openaiRef}><OpenAI /></div>
      <div ref={casestudiesRef}><CaseStudies /></div>
      <RegisterToday />
      <div ref={libraryRef}><Library /></div>
      <Footer />
    

</div>

     
    </div>
  );
}


export default App;