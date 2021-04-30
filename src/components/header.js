import react from 'react';
import "./sass/styles.scss";
import Typical from 'react-typical'
 

import iotlab from "./sass/iotlabdark.png"
import './sass/loader.scss';
import './sass/loader.js';
import logo from './sass/logo.png';

import logger1 from './sass/logger1.png';
import logger2 from './sass/logger2.png';

import logger3 from './sass/logger3.png';

import logger4 from './sass/logger4.png';
import Form from './form.js';

import logger from "./sass/logger1.png"


function Header(){

    return <>
    <div id="main">

 

            <div className="container" id="div1">
        
                <div   id="logodiv">
                    <img src={logo}  id="logo1" />
  
                    <img src={iotlab} id="logo2"  />

                </div>
        
            </div>



        <div className="containerFluid" id="div2">


<div className="row">
<div className="col-sm-6 col-md-6 col-xs-12">

 <div className="bar" id="bar">
 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  data-interval="2000">

 <div className="carousel-inner">
   <div className="carousel-item active">
     <img src={logger1} id="logo" alt="First slide"/>
     <div class="carousel-caption">

  </div>
   </div>
   <div className="carousel-item">
     <img src={logger2} id="logo" alt="Second slide"/>
   </div>
   <div className="carousel-item">
     <img src={logger3} id="logo" alt="Third slide"/>
   </div>
   <div className="carousel-item">
     <img src={logger4} id="logo" alt="forth slide"/>
   </div>
 </div>
 
 <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
   <span className="carousel-control-next-icon" aria-hidden="true"></span>
   <span className="sr-only">Next</span>
 </a>

</div>

   

     </div>
     <h1  id="loggerheading">TEMPERATURE LOGGER</h1>
     
     <p id="loggersubheading"><Typical
        steps={['automatically records temperature continously', 1000, 'easy to retrieve data', 1000, 'automatically generates alert ',1000]}
        loop={Infinity}
        wrapper="p"
      /></p>
 </div>


<div className="col-sm-6 col-md-6 col-xs-12">

<div id="form">
<Form/>
</div>
</div>


 </div>
</div>





    </div>
    </>;
}




export default Header;