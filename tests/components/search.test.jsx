import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Search } from '../../src/components/search';

Enzyme.configure({ adapter: new Adapter() });

const setUsers = jest.fn();
const users = [{name: 'Vaila'}]

describe('Search', function () {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ items: users }),
        })
    );

    beforeEach(() => {
        fetch.mockClear();
    });

    it('should render a searchform', () => {
        const wrapper = shallow(<Search setUsers={setUsers} />);
        expect(wrapper.find("form")).toHaveLength(1);
    });

    it.skip('should update search value and call set users with expected matches', async () => {
        const wrapper = shallow(<Search setUsers={setUsers}/>);
        wrapper
            .find('input')
            .at(0)
            .simulate('change', { target: { name: '', value: 'vaila' } });
        expect(wrapper.find('input').at(0).prop('value')).toEqual('vaila');
        wrapper.find('form').first().simulate('submit', { preventDefault: jest.fn(), type: 'submit'});
        expect(setUsers).toHaveBeenCalledWith(users);
    });

    it('should reset search value on user click of clear button', () => {
        const wrapper = shallow(<Search setUsers={setUsers} />);
        wrapper
            .find('input')
            .at(0)
            .simulate('change', { target: { name: '', value: 'vaila' } });
        expect(wrapper.find('input').at(0).prop('value')).toEqual('vaila');
        wrapper
            .find('.btn--clear')
            .first()
            .simulate('click');
        expect(wrapper.find('input').at(0).prop('value')).toEqual('');
    });
});

