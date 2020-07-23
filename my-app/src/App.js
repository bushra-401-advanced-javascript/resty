import React from 'react';
import './styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            results: [Headers = {}, Response = {}]
        }
    }

    //define a function to handle submitting the form in the form component
    //pass this this function as a props to the form component
    //call the function from the form component
    handleSubmit = results => {
        console.log('__RESULTS__: ', results);
        const res = [Headers = {'Content-Type': 'application/json'}, Response = results]
        this.setState({ count: results.count, results: res });
        console.log('__STATE__: ', this.state);
    }

    render() {
        return(
            <div id="app">
                <Header />
                <Form handler = {this.handleSubmit} />
                <Results Headers = {this.state.results[0]} Response = {this.state.results[1]} />
                <Footer />
            </div>
        )
    }
}

export default App;
