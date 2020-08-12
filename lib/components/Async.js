import React from 'react';
import axios from 'axios';

export default class Async extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleDateString(),
            number: 0.99,
        }
    }

    getCurTime = async () => {
        const resp = await axios.get('/time');
        this.setState( {
            time: resp.data.time,
        });
    };
    
    getRandomNumber = async () => {
        const resp = await axios.get('/random');

        this.setState({
            number: resp.data.number,
        });
    };

    startTimeChange = async () => {
        this.intervalTimeID = setInterval(this.getCurTime, 2000);
    };

    startRandomNumber = async () => {
        this.internalRandomID = setInterval(this.getRandomNumber, 2500);
    }

    async componentDidMount() {
        this.startTimeChange();
        this.startRandomNumber();
        
    }
    
    render() {
        return (
            <div>
                <p>{this.state.time}</p>
                <p>{this.state.number}</p>
            </div>
        );
    }
}