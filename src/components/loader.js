import react from 'react';
import './sass/loader.scss';
import './sass/loader.js';
import logo from './sass/logo.png';
import logger from './sass/logger1.png';
import logger1 from './sass/logger1.png';
import logger2 from './sass/logger2.png';

import logger3 from './sass/logger3.png';

import logger4 from './sass/logger4.png';




function Loader(){
return <>



<div id="loader">


 <div className="row">
 <div className="col-sm-6 col-md-6 col-xs-12">
  <div className="bar">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  data-interval="2000">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={logger1} id="logo" alt="First slide"/>
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
  </div>
  </div>
</div>
</>


}

export default Loader;