import React from 'react';
import ArticleList from '../ArticleList';
import Aritcle from '../Article';

// import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: {id: 'a'},
            b: {id: 'b'},
        },
    }

    Aritcle.propTypes = {};

    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList
                {...testProps}
            />
        );
        console.log(wrapper.getElement());
        console.log(wrapper.getElement().props.children);

        expect(wrapper.getElement().props.children.length).toBe(2);
        expect(wrapper.find('Article').length).toBe(2);
        expect(wrapper).toMatchSnapshot();
    });

});