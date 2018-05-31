import React from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router';
import * as messages from '../../constants/ui.labels'

const Header = props => {
    return (
        <React.Fragment>
            <Navbar articlesType={props.articlesType} 
                    onGetArticlesClick={props.onGetArticlesClick} 
                    onAboutClick={props.onAboutClick} 
                    onSearchSubmit={props.onSearchSubmit}/>
            <header id="masthead" class="site-header" role="banner" style={{ backgroundPosition: 50% 17 }}>
                <div class="container">
                    <div class="site-branding">						
                        <h1 class="site-title">
                            <Link to="/">
                            {
                                props.hasReturn 
                                ? <i class="material-icons">more</i>
                                : ''
                            }
                            {
                                <span>{messages.SITE_TITLE}</span>
                            }
                            </Link>
                        </h1>
                    </div>
                </div>	
            </header>
        </React.Fragment>
    )   
}

export default Header
  