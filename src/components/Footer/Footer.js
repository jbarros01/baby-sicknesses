import React from "react";
import * as messages from '../../constants/ui.labels'

const Footer = () => {
    return (
        <React.Fragment> 
            <footer id="colophon" class="site-footer" role="contentinfo">     
                <div class="site-info container">
                    {messages.RESERVED_TO}
                </div>
	      	</footer>
        </React.Fragment>
    )
}

export default Footer