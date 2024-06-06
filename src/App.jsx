import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { motion } from "framer-motion";
import "./App.css";
import YourComponent from './components/YourComponent';
import LeadershipSection from './components/LeadershipSection';
import MyComponent from './components/MyComponent';


const App = () => {
  return (
    <div className="container">
      <div className="row my-4">
           {/* <video src="your_video.mp4" controls className="video-fluid animate-video">
                Your browser does not support the video tag.
           </video> */
           <img src="about_img-1.png" alt="" className="img-fluid animate-image" />
           }  
      </div>
      <div className="row text-center my-4 mb-4 pb-4 main">
        <div className="col data">
          <h1 className="animated-text">85+</h1>
          <p className="animated-text">Years of Experience</p>
          <p className="separator">|</p>
        </div>
        <div className="col data">
          <h1 className="animated-text">$100<sub>BN</sub></h1>
          <p className="animated-text">Multinational Conglomerate</p>
          <p className="separator">|</p>
        </div>
        <div className="col data">
          <h1 className="animated-text">4k+</h1>
          <p className="animated-text">Happy Customers</p>
        </div>
      </div>
       

      {/* <div className='row data-2'>
           <div className='col-md-8 py-4'>
                 <p className='data-3'>Unveiling the legacy of Bajaj Electricals</p>
                  <p className='mt-4 py-4 data-4'> Bajaj Electricals, a part of the $100bn multinational conglomerate Bajaj Group, is a globally renowned 
                  Consumer Appliances and Lighting Solutions company. With the vision to enhance the quality of life and 
                  bring happiness with sustainability, we have built our legacy on trust and excellence. 
                  We have incorporated a consumer-centric approach, attuning ourselves to the evolving demands of 
                  our consumers.</p>
           </div>
           <div className='col-md-4 '>
                 <img src="about_img-2.png" alt=""/>
           </div>
      </div> */}
      <MyComponent/>


      <YourComponent/>

      <LeadershipSection/>
      
      <div className='history mt-4'>
            <div className='row'>
                 <p style={{fontSize:'30px'}}>Our</p>
                 <p style={{fontSize:'42px',fontWeight:'700'}}>History</p>
                 <p className='history-1'>Bajaj Electricals is a part of the conglomerate of the Bajaj Group, a name that symbolises excellence, innovation and trust. Established in 1926 by the visionary philanthropist Jamnalal Bajaj, the Bajaj Group is recognised as one of India’s most esteemed business houses.</p>
            </div>
            <div className='row'>
                 <div className='col-md-8 py-4 history-2'>
                      <p>Relentless initiatives to adapt, innovate and develop quality solutions have enabled Bajaj Group to develop a colossal empire spanning automobiles, insurance, consumer appliances, financial services, engineering, procurement and construction, material handling, travel and tourism, steel, and fast-moving electrical goods.</p>
                      <p className='py-3'>Founded in the name of Radio Lamp Works, the year 1938 marked our establishment. However, it was only in 1960 that we were named Bajaj Electricals Limited, signifying the commencement of a new journey. Our glorious journey witnessed several milestones, including setting up manufacturing units, energy generation units and acquisitions of important brands such as Morphy Richards and Nirlep, that enabled us to expand into uncharted markets and maximise value creation for our diverse shareholders.</p>
                 </div>
                 <div className='col-md-4 py-4'>
                       <img src="about_img-21.png" alt="" className='img-fluid'/>
                 </div>
            </div> 
      </div>
       
    </div>
  );
};

export default App;
