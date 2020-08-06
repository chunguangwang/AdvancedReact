import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

// class App extends React.Component {
//     state = {
//         answer: 42,
//     };
//     asyncFunc = () => {
//         return 3;
//     }
//     componentDidMount() {
//         this.setState({
//             answer: this.asyncFunc()
//         });
//     }
//     render() {
//         return (
//         <h2>Hello Class Components -- {this.state.answer}</h2>
//         );
//     }
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);