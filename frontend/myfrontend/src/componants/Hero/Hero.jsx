

import './Hero.css';

function Hero() {
  return (
    <div className="hero">
     <div className='decoration'></div>
      <div className="leftelements">
        
        <div className="textsDiv">
          <div className="titlediv">
            <h1 id="title">Let's Build Something
                <br /> amazing with GPT-3 <br /> OpenAI</h1>
          </div>
<br />
          <div className="pdiv">
            <p id="text">
              Yet bed any traveling assistance indulgence unpleasing.
              <br />
               Not thoughts all exercise blessing. Indulgence way
               <br />
               everything joy alteration boisterous the attachment. Party 
               <br />
               we years to order allow asked of.
            </p>
          </div>
        </div>

        <div className="btnDiv">
          <input type="email" placeholder="Your Email Address" id="emaillabel"/>
          <button id="getStartedBtn">Get Started</button>
        </div>
      </div>

     
      <div className="rightElements">
        <img id="head-image" src="src/assets/Header Illustration.png" alt="head-image"/>
      </div>
    </div>
  );
}

export default Hero;
