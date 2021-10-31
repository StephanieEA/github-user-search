import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';

Enzyme.configure({ adapter: new Adapter() });

describe('Test App', function () {
    it('should have a header tag with Github User Search', function () {
        const wrapper = shallow(<App />);
        expect(wrapper.find("h1").text().trim()).toEqual("Github User Search");
    });
});