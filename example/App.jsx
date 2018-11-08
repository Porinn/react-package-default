import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppTest from '../dist/App';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppTest />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('App'));