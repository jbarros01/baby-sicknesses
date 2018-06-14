import React from "react";
import * as messages from '../../constants/ui.labels'

const Footer = props => {
    return (
        <React.Fragment> 
            <footer id="colophon" class="site-footer" role="contentinfo">     
                <div class="site-info container">
                    <div class="by">
                        {messages.RESERVED_TO}
                    </div>
                    <div class="help" title={messages.ABOUT}>
                        <i class="material-icons" onClick={props.onAboutClick.bind(null)}>live_help</i>
                    </div>
                </div>
	      	</footer>
        </React.Fragment>
    )
}

export default Footer