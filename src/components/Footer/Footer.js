import React from "react";
import * as messages from '../../constants/ui.labels'

const Footer = props => {
    return (
        <React.Fragment> 
            <footer id="colophon" class="site-footer" role="contentinfo">     
                <div class="site-info container">
                    <div class="sponsor">
                        <img alt="espf" src="img/espf.png" />
                        <img alt="poch" src="img/poch.png" />
                    </div>
                    <div class="by">
                        <a class="about-link"onClick={props.onAboutClick.bind(null)}>{messages.ABOUT} </a>
                        <span>{messages.RESERVED_TO}</span>
                    </div>
                </div>
	      	</footer>
        </React.Fragment>
    )
}

export default Footer