import React, { Component } from 'react';
import '../styles/Form.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.url = '';
        this.method = '';
        this.state = {
            url: '',
            method: '',
            msg: '',
        }
    }

    handleURL = e => {
        this.url = e.target.value;
        // console.log('From HandleURL>>>', this.url);
    }

    handleMethod = e => {
        this.method = e.target.value.toLowerCase() + '  - ';
        // console.log('From HandleMethod>>>', this.method);
    }

    handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let url = this.url;
            // console.log('From HandleSubmit>>>', this.url);
            let method = this.method;
            // console.log('From HandleSubmit>>>', this.method);
            let msg = '';
            if (url && method) {
                this.setState({ url, method, msg });
                
                e.target.reset();

                const raw = await fetch(this.url);
                const data = await raw.json();
                this.props.handler(data);

                this.url = '';
                this.method = '';
                this.msg = '';
            }
            else {
                // console.log(this.state);
                url = '';
                method = '';
                msg = 'Please add a URL and select a method..';
                this.setState({ url, method, msg });
                e.target.reset();
            }

            this.url = '';
            this.method = '';
            this.msg = '';
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>Please enter an API URL to make a request to</label><br />
                    <input name="url" type="url" id="url" placeholder="api url.." onInput={this.handleURL} /><br /><br />
                    <label>Select one of the REST methods:</label><br />
                    <input type="button" className={this.state.method === 'get  -' ? 'active' : ''} className="method" id="get_btn" value="GET" onClick={this.handleMethod} />
                    <input type="button" className={this.state.method === 'post  -' ? 'active' : ''} className="method" id="post_btn" value="POST" onClick={this.handleMethod} />
                    <input type="button" className={this.state.method === 'put  -' ? 'active' : ''} className="method" id="put_btn" value="PUT" onClick={this.handleMethod} />
                    <input type="button" className={this.state.method === 'delete  -' ? 'active' : ''} className="method" id="del_btn" value="DELETE" onClick={this.handleMethod} /><br /><br />
                    <button type="submit">Send Request</button>
                </form>
                <section>
                    <label>Sent Request:</label><br /><br />
                    <div className="requests">
                        <span className="req_method"><br />{this.state.method}</span>
                        <span className="req_url">{this.state.url}</span>
                        <span className="msg">{this.state.msg}</span>
                    </div>
                </section>
            </div>
        )
    }
}

export default Form;
