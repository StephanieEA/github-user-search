import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { User } from '../../src/components/user';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    user: {login: 'vaila', avatar_url: 'vailaimg'},
    fetchUser: jest.fn()
}

describe('User', () => {
    it('should render a li', () => {
        const wrapper = shallow(<User user={props.user} fetchUser={props.fetchUser} />);
        expect(wrapper.find("li")).toHaveLength(1);
    });

    it('should fetchUser on click', () => {
        const wrapper = shallow(<User user={props.user} fetchUser={props.fetchUser} />);
        wrapper.find('li').simulate('click', {currentTarget: { innerText: 'vai'}});
        expect(props.fetchUser).toHaveBeenCalled();
        expect(props.fetchUser).toHaveBeenCalledWith('vai');
    });
});

