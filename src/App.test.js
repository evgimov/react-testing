import React from 'react';
import ReactDOM from 'react-dom';
import App, { doIncrement, doDecrement, Counter } from './App';
import renderer from 'react-test-renderer';

describe('App Component', () => {
  it('renders the Counter wrapper', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Counter)).to.have.length(1);
  });

  it('passes all props to Counter wrapper', () => {
    const wrapper = shallow(<App />);
    let counterWrapper = wrapper.find(Counter);
    expect (counterWrapper.props().counter).to.equal(0);
    wrapper.setState({ counter: -1 });

    counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.props().counter).to.equal(-1);
  });
});

