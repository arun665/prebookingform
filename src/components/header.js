import react from 'react';
import "./sass/styles.scss";
import logo from "./sass/logo.png"


function Header(){

    return <>
    <div id="main">
        <div id="box1">
        </div>
        <div id="box2">
            <div id="text">
            <p>  AMBITAG </p>
              <button className="btn " id="formbutton"> Use the form  </button>
       
            </div>

        </div>
        <div id="box3">
            <div id="container">
                <div id="logo">
                    <img src={logo} className="img-responsive" />
                </div>
                <div id="menu">
                    <ul>
                       <li>
                        <div id="app-cover">
                            <div className="row">
                              <div className="toggle-button-cover">
                                <div className="button-cover">
                                  <div className="button r" id="button-1">
                             
                                  </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                       </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>;
}



export default Header;