import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import DataApi from 'DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';
import axios from 'axios';
import Async from './Async';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp';

// const api = new DataApi(data);

class App extends React.Component {
    static childContextTypes = {
        store: PropTypes.object,
    };

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    state = this.props.store.getState();
    setSearchTerm = (searchTerm) => {
        this.setState({ searchTerm });
    };
    // constructor() {
    //     super();
    //     this.state = {
    //         articles: api.getArticles(),
    //         authors: api.getAuthors(),
    //     };
    //     console.log(this.state);
    // }

    // async componentDidMount() {
    //     const resp = await axios.get('/data');
    //     const api = new DataApi(resp.data);
    //     this.setState((prevState) => {
    //         return {
    //             articles: api.getArticles(),
    //             authors: api.getAuthors(),
    //         }
    //     });
    // }
    onStoreChange = () => {
        this.setState(this.props.store.getState());
    }
    componentDidMount() {
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        // setInterval(() => {
        //     this.setState({
        //         timestamp: new Date().toTimeString(),
        //     });
        // }, 1000);
        this.props.store.startClock(this);
    }

    componentWillUnmount() {
        this.props.store.unsubscribe(this.subscriptionId);
    }

    render() {
        let { articles, searchTerm } = this.state;
        if (searchTerm) {
            articles = pickBy(articles, (value, key) => {
                return value.title.match(searchTerm) || value.body.match(searchTerm);
            })
        }
        return (
            <div>
                <TimeStamp />
                <SearchBar doSearch={this.props.store.setSearchTerm}/>
                <ArticleList 
                    articles={articles}
                    store={this.props.store}
                />
            </div>
        );
    }
}

export default App;