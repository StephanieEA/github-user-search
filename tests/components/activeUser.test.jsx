import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ActiveUser } from '../../src/components/activeUser';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    user: {
        login: 'vai',
        name: 'vaila',
        email: 'vaila@gmail.com',
        html_url: 'githublink.com',
        location: undefined,
        followers: 1,
        following: 2,
        public_repos: 2,
        blog: undefined,
        twitter_username: undefined,
        created_at: '2008-07-04T05:37:41Z'
    },
    updateActiveUser: jest.fn(),
    showNextUser: jest.fn(),
    showPreviousUser: jest.fn(),
    mode: 'light'
}

describe('ActiveUser', function () {
    it('should render a lightbox', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find(".lightbox")).toHaveLength(1);
    });

    it('should render user login', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(0).text()).toEqual(props.user.login);
    });

    it('should render user name', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(1).text()).toEqual(props.user.name);
    });

    it('should render user email', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(2).text()).toEqual(props.user.email);
    });

    it('should render formatted joined date', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(3).text()).toContain('Joined');
    });

    it('should render public repo number', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(4).text()).toEqual(`${props.user.public_repos} repos`);
    });

    it('should render follower count', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(5).text()).toEqual(`${props.user.followers} followers`);
    });

    it('should render following count', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(6).text()).toEqual(`${props.user.following} following`);
    });

    it('should not render location if there is none', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li")).toHaveLength(8);
    });

    it('should render location if there is one', () => {
        const location = 'Atlanta';
        const user = {...props.user, location};
        const wrapper = shallow(<ActiveUser user={user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(7).text()).toEqual(location);
    });

    it('should render github url', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(7).text()).toEqual(props.user.html_url);
    });

    it('should not render blog if there is none', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li")).toHaveLength(8);
    });

    it('should render blog if there is one', () => {
        const blog = 'blog.io';
        const user = { ...props.user, blog };
        const wrapper = shallow(<ActiveUser user={user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(8).text()).toEqual(blog);
    });

    it('should not render twitter link if there is none', () => {
        const wrapper = shallow(<ActiveUser user={props.user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li")).toHaveLength(8);
    });

    it('should render twitter link if there is one', () => {
        const twitter_username = 'tweetin';
        const user = { ...props.user, twitter_username };
        const wrapper = shallow(<ActiveUser user={user} updateActiveUser={props.updateActiveUser} showNextUser={props.showNextUser} showPreviousUser={props.showPreviousUser} mode={props.mode} />);
        expect(wrapper.find("li").at(8).text()).toEqual(twitter_username);
    });
});

