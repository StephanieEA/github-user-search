import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Toggle } from '../../src/components/toggle';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    mode: 'light',
    toggleMode: jest.fn()
}

describe('Toggle', function () {
    it('should render a button', () => {
        const wrapper = shallow(<Toggle mode={props.mode} toggleMode={props.toggleMode} />);
        expect(wrapper.find(".btn")).toHaveLength(1);
    });

    it('should toggleMode on click', () => {
        const wrapper = shallow(<Toggle mode={props.mode} toggleMode={props.toggleMode} />);
        wrapper.find('.btn').simulate('click');
        expect(props.toggleMode).toHaveBeenCalled();
    });
    
});

