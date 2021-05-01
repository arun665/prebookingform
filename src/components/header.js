import react from 'react';
import "./sass/styles.scss";
import "./sass/stylesandroid.scss";
import "./sass/stylestablet.scss";

import Typical from 'react-typical'
 

import iotlab from "./sass/iotlabdark.png"
import './sass/loader.scss';
import './sass/loader.js';
import logo from './sass/logo.png';
import background from './sass/background.jpg';

import logger1 from './sass/logger1.png';
import logger2 from './sass/logger2.png';

import logger3 from './sass/logger3.png';

import logger4 from './sass/logger4.png';
import Form from './form.js';

import logger from "./sass/logger1.png"


function Header(){

    return <>
    <div id="main">

 

        


        <div  id="div2">


<div className="row">
<div className="col-sm-12 col-md-6 col-xs-12">

<div   id="logodiv">
                    <img src={iotlab}  id="logo1" />
  
                </div>
        

<img src={background} id="bar"/>

</div>
<div className="col-sm-12 col-md-6 col-xs-12">


<Form/>


</div>


 </div>
</div>





    </div>
    </>;
}




export default Header;