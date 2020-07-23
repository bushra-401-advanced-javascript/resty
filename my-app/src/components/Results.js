import React from 'react';
import ReactJson from 'react-json-view';

function Results(props) {
    return (
        <div>
            <section>
                <ReactJson src={props} theme="ocean" />
            </section>
        </div>
    )
}

export default Results;
