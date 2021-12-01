import React from 'react'
import {BrowserRouter as Router, Link , NaviLink , Switch , Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';


function Header() {

    function refreshPage() {
        window.location.reload(false);
      }
    return (
    <div>
        <nav class="fh5co-nav" role="navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-xs-2">
                            <div id="fh5co-logo" onClick={refreshPage}> <Link to="/" href="#">Shop.</Link></div>
                        </div>
                        <div class="col-md-6 col-xs-6 text-center menu-1">
                            <ul>
                                <li class="has-dropdown" onClick={refreshPage}>
                                    <Link to="/" href="#">Shop</Link>
                                    <ul class="dropdown">
                                        <li><a href="single.html" >Single Shop</a></li>
                                    </ul>
                                </li>
                                <li onClick={refreshPage}><Link to="/About" href="#">About</Link></li>
                                <li class="has-dropdown" onClick={refreshPage}>
                                    <Link to="/Services" href="#">Services</Link>
                                    <ul class="dropdown">
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">eCommerce</a></li>
                                        <li><a href="#">Branding</a></li>
                                        <li><a href="#">API</a></li>
                                    </ul>
                                </li>
                                <li onClick={refreshPage}><Link to='/Contact' href="#">Contact</Link></li>
                                <li onClick={refreshPage}><a >Login</a></li>
                                
                            </ul>
                        </div>
                        <div class="col-md-3 col-xs-4 text-right hidden-xs menu-2">
                            <ul>
                                <li class="search">
                                    <div class="input-group">
                                    <input type="text" placeholder="Search.."/>
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary" type="button"><i class="icon-search"></i></button>
                                    </span>
                                    </div>
                                </li>
                                {/* <li class="shopping-cart"><a href="#" class="cart"><span><small>0</small><i class="icon-shopping-cart"></i></span></a></li> */}
                            </ul>
                        </div>
                    </div>
                    
                </div>
	    </nav>
    </div>
    )
}

export default Header
