import React, {Component} from 'react';
import './styles/Header.scss';

class Header extends Component {
    render() {
        return (
            <header>
                <span id="banner">                                        
                <h1>RESTy App</h1>
                <img src="https://icon-library.com/images/rest-icon/rest-icon-25.jpg" alt="REST Logo" className="App-logo" width="50" height="50" />
                </span>
            </header>
        )
    }
}
export default Header;
