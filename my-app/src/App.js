import React from 'react';
import './styles/App.scss';

//import Header, Form, and Footer
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

//Write an App component that serves as the container for all sub-components of this application
class App extends React.Component {
    //render Header, Form, and Footer
    render() {
        return(
            <div id="app">
                <Header />
                <Form />
                <Footer />
            </div>
        )
    }
}

export default App;
