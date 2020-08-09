import React from 'react';

import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';
import axios from 'axios';

// const api = new DataApi(data);

class App extends React.Component {
    state = this.props.store.getState();
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

    render() {
        return (
            <ArticleList 
                articles={this.state.articles}
                store={this.props.store}
            />
        );
    }
}

export default App;