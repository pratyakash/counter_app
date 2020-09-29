import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findTestByAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`)

test('Render without fail', () => {
  const wrapper = setup();
  const appComponent = findTestByAttr(wrapper, 'component-app');

  expect(appComponent.length).toBe(1);
});

test('Render Button', () => {
  const wrapper = setup();
  const button = findTestByAttr(wrapper, 'increament-button');

  expect(button.length).toBe(1);
});

test('Render Counter Display', () => {
  const wrapper = setup();
  const counterDisplay = findTestByAttr(wrapper, 'counter-display');

  expect(counterDisplay.length).toBe(1);

});

test('Counter start at 0', () => {
  const wrapper = setup();
  const counter = findTestByAttr(wrapper, 'count');
  const textOfCounter = counter.text();

  expect(textOfCounter).toBe('0');
});

test('Increase button when click on the button', () => {
  

});
