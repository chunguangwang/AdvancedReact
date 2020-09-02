class DataApi {
    constructor(rawData) {
        this.data = {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors),
            searchTerm: '',
            // timestamp: new Date().toTimeString(),
        }
        this.subscriptions = {};
        this.lastSubscriptionId = 0;
    }

    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }

    getArticles() {
        return this.mapIntoObject(this.rawData.articles);
    }

    getAuthors() {
        return this.mapIntoObject(this.rawData.authors);
    }

    lookupAuthor = (authorId) => {
        return this.data.authors[authorId];
    }

    getState() {
        return this.data;
    }

    subscribe = (cb) => {
        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = cb;
        return this.lastSubscriptionId;
    }

    unsubscribe = (subscriptionId) => {
        delete this.subscriptions[subscriptionId];
    }

    notifySubscribers = () => {

        Object.values(this.subscriptions).forEach((cb) => {cb();});
    }

    setSearchTerm = (searchTerm) => {
        this.data.searchTerm = searchTerm;
        this.notifySubscribers();
    };

    startClock = (component) => {
        setInterval(() => {
            this.data.timestamp = new Date().toTimeString();
            component.setState({
                timestamp: this.data.timestamp,
            });
            this.notifySubscribers();
        }, 1000);
    }
}

export default DataApi;