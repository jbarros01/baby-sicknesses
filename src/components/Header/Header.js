import React from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router';

const Header = () => {

    return (
        <React.Fragment>
            <Navbar />
            <header id="masthead" class="site-header" role="banner" style={{ backgroundPosition: 50% 17 }}>
                <div class="container">
                    <div class="site-branding">						
                        <h1 class="site-title"><Link to="/">Doenças Infantis</Link></h1>
                    </div>
                </div>	
            </header>
        </React.Fragment>
    )   
}

export default Header
  