import React from 'react';
import './../App.css';
import logo from './../assests/blobfish.png';

function Header(props) {
    // HTML for creating the Header component
    return(
        <div className="header" >
            {/*Top right logo creation*/}
            <img src={logo} className="header-logo"  width="200" alt="logo"  />
            
            {/*Website title*/}
            <span style={{fontSize: 'xx-large'}}>{props.title}</span>

            {/*Div for Sign in, currently not implemented*/}
            <div class="d-flex flex-row align-items-center">
                <input class='d-flex m-2' type='text' placeholder='(Not implemented)'>
                </input>
                <a class='d-flex m-2' href='https://cdn-01.media-brady.com/store/stus/media/catalog/product/cache/4/image/85e4522595efc69f496374d01ef2bf13/1619529292/t/r/traffic-signs-rm158-lg.jpg'> Sign In </a>
            </div>
        </div>
    )
}

export default Header;